import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";
class Contact extends Component {
  constructor() {
    super();

    this.state = {
      moreDitales: false,
    };
  }
  showInfo = () => {
    this.setState({ moreDitales: !this.state.moreDitales });
  };

  deleteContact = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }))
      .catch((err) => console.log(err));
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { moreDitales } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h5>
                {name}{" "}
                <i
                  className="fas fa-caret-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.showInfo}
                ></i>
                <i
                  className="fas fa-trash-alt float-right text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                ></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt float-right mr-4 text-primary"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
              </h5>

              {moreDitales ? (
                <ul className="list-group">
                  <li className="list-group-item">Email : {email}</li>
                  <li className="list-group-item">Phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
