import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

const Nav = (props) => {
    const history = useHistory();
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push("/");
        window.location.reload();
        alert("Logout Successful");
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-custom navbar-mainbg navbar-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand navbar-logo" to="/dashboard">{props.title} Admin</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse admin-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/users"><i className="fa fa-users"></i> Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/queries"><i className="fa fa-question"></i> Queries</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/orders"><i className="fa fa-award"></i> Orders</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-danger my-3 mx-3" onClick={logout}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
