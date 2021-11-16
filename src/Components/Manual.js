import React, { useState } from 'react'
import image from "../images/image.jpg";

const Manual = (props) => {
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const [showDiv5, setShowDiv5] = useState(false);
    const [img, setImg] = useState(true);

    const show1 = () => {
        setShowDiv1(true);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setImg(false);
    }
    const show2 = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setImg(false);
    }
    const show3 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
        setImg(false);
    }
    const show4 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(true);
        setShowDiv5(false);
        setImg(false);
    }
    const show5 = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(true);
        setImg(false);
    }

    return (
        <>
            <div className="container manual mb-5">
                <h3 className="text-center my-5">Steps for using the {props.title}</h3>

                <div className="container manualBtn w-75 mx-auto d-flex justify-content-center align-items-center">
                    <button className="btn" onClick={!showDiv1 ? show1 : null}>Step 1</button> <span className="arrow">→</span>
                    <button className="btn" onClick={!showDiv2 ? show2 : null}>Step 2</button> <span className="arrow">→</span>
                    <button className="btn" onClick={!showDiv3 ? show3 : null}>Step 3</button> <span className="arrow">→</span>
                    <button className="btn" onClick={!showDiv4 ? show4 : null}>Step 4</button> <span className="arrow">→</span>
                    <button className="btn" onClick={!showDiv5 ? show5 : null}>Step 5</button>
                </div>

                <div className="container my-5 textBox">
                    <div className="divBox">
                        {showDiv1 ?
                            <>
                                <h3>Step 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime laudantium quasi quaerat at esse voluptatibus quae eum optio ea! 1</p>
                            </>
                            : null
                        }
                    </div>
                    <div className="divBox">
                        {showDiv2 ?
                            <>
                                <h3>Step 2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime laudantium quasi quaerat at esse voluptatibus quae eum optio ea! 2</p>
                            </>
                            : null
                        }
                    </div>
                    <div className="divBox">
                        {showDiv3 ?
                            <>
                                <h3>Step 3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime laudantium quasi quaerat at esse voluptatibus quae eum optio ea! 3</p>
                            </>
                            : null
                        }
                    </div>
                    <div className="divBox">
                        {showDiv4 ?
                            <>
                                <h3>Step 4</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime laudantium quasi quaerat at esse voluptatibus quae eum optio ea! 4</p>
                            </>
                            : null
                        }
                    </div>
                    <div className="divBox">
                        {showDiv5 ?
                            <>
                                <h3>Step 5</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime laudantium quasi quaerat at esse voluptatibus quae eum optio ea! 5</p>
                            </>
                            : null
                        }
                    </div>
                    <div className="divBox">
                        {img ?
                            <div className="image d-flex justify-content-around align-items-center">
                                <img src={image} alt="Product" />
                                <img src={image} alt="Product" />
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Manual
