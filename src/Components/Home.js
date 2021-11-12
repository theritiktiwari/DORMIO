import { Link } from "react-router-dom";
import React from 'react'
import About from './About'
import Team from './Team'
import image from "../images/image.jpg"
import FAQ from './FAQ'
import Time from './Time'
import Contact from './Contact'
import Footer from "./Footer";

const Home = (props) => {
    return (
        <>
            <div className="container">
                <div className="container home" id="home">
                    <div className="left">
                        <h1>Welcome to {props.title} Store</h1>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                        <Link to="/buy" className="btn btn-primary">BUY NOW</Link>
                    </div>
                    <div className="right">
                        <img src={image} alt="Product" />
                    </div>
                </div>
                <About title={props.title} />
            </div>
            <FAQ title={props.title} />
            <div className="container">
                <Team />
                <Contact />
            </div>
            <Time user={props.user} />
            <Footer title={props.title} />
        </>
    )
}

export default Home
