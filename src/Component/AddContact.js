import React, { Component } from "react";
import { Consumer } from "../Context";
import { v4 as uuidv4 } from "uuid";
import TextInput from "./TextInput";import axios from 'axios'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error:{}
  };

  changeState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = (dispatch, e) => {
    e.preventDefault();

    const { name,  email, phone } = this.state;

    if (name === "") {
      this.setState({error : {name:"Name is required"}})
      return;
    }
   
    if (email === "") {
        this.setState({error : {email:"Email is required"}})
      return;
    }
    if (phone === "") {
        this.setState({error : {phone:"Phone is required"}})
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    axios.post('https://jsonplaceholder.typicode.com/users' , contact)
    .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data}))
   
    this.setState({ name: "",  email: "", phone: "" });
    this.props.history.push('/')
  };

  render() {
    const { name, email, phone , error} = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
           
              <div className="card">
                <div className="card-header">
                  <h4>Add Contact</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.addContact.bind(this, dispatch)}>
                    <div className="form-group row">
                      <TextInput
                        label="Name"
                        name="name"
                        id="name"
                        placeholder="Enter Name ..."
                        onChange={this.changeState}
                        value={name}
                        error={error.name}
                      />
                    </div>
                    <div className="form-group row">
                      <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email ..."
                        onChange={this.changeState}
                        value={email}
                        error={error.email}
                      />
                    </div>
                    <div className="form-group row">
                      <TextInput
                        label="Phone"
                        name="phone"
                        id="phone"
                        placeholder="Enter Phone ..."
                        onChange={this.changeState}
                        value={phone}
                        error={error.phone}
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Add Contact"
                        className="btn btn-danger btn-block"
                      />
                    </div>
                  </form>
                </div>
              </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
