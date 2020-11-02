import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-danger py-3 mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand">Contact List Manager</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> <i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link"> <i className="fa fa-question" aria-hidden="true"></i> About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i> Add</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav
