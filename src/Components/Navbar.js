import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import Signup from './Signup';
import Login from './Login';
import logo from "../images/logo.png";

const Navbar = (props) => {
    const history = useHistory();

    const auth = getAuth();

    // logout
    const logout = async () => {
        try {
            await signOut(auth);
            history.push("/");
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="DORMIO" width="55px" height="55px" style={{borderRadius: "100%"}} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/manual">How to Use</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/buy">BUY</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#contact">Contact Us</a>
                            </li>
                        </ul>
                        {!props.user && <div className="d-flex nav-btn">
                            <button type="button" className="btn btn-login me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                            <button type="button" className="btn btn-signup" data-bs-toggle="modal" data-bs-target="#signupModal">Signup</button>
                        </div>}
                        {props.user && <div className="d-flex nav-btn">
                            <Link to="/profile" className="btn btn-login me-2">Profile</Link>
                            <button className="btn btn-danger" style={{ borderColor: "#DC3545" }} onClick={logout}>Logout</button>
                        </div>}
                    </div>
                </div>
            </nav>
            <Signup />
            <Login />
        </>
    )
}

export default Navbar
