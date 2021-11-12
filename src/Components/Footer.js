import { Link } from "react-router-dom";
import React from 'react'

const Footer = (props) => {
    return (
        <>
            <div className="container-fluid footer">
                <div className="items container d-flex justify-content-between">
                    <div className="footer-item pt-5">
                        <h3>Details</h3>
                        <ul className="d-flex flex-column list-unstyled">
                            <li className="my-2">Phone : <a href="tel:9876543210" className="link phone">9876-543-210</a></li>
                            <li>Email : <a href="mailto:theritiktiwari@gmail.com" className="link mail">theritiktiwari@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-item pt-5">
                        <h3>Site Links</h3>
                        <ul className="d-flex flex-column list-unstyled">
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/manual" className="link">Manual</Link></li>
                            <li><a href="/#about" className="link">About Us</a></li>
                            <li><Link to="/buy" className="link">Buy Now</Link></li>
                            <li><a href="/#contact" className="link">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-item pt-5">
                        <h3>Where to buy</h3>
                        <Link to="/buy" className="btn btn-buy">Click Here</Link>
                    </div>
                </div>
                <div className="container copyright">
                    <hr className="my-4" />
                    <p className="text-center">Copyright &copy; {new Date().getFullYear()} <Link className="text-decoration-none name" to="/">{props.title}</Link>. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
