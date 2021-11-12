import React from 'react'

const Manual = (props) => {
    const print = () => {
        window.print();
    }
    return (
        <>
            <div className="container">
                <h3 className="text-center">Steps for using the {props.title}</h3>
                <button className="btn btn-warning" onClick={print}>Download Manual</button>
            </div>
        </>
    )
}

export default Manual
