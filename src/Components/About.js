import React from 'react'

const About = (props) => {
    return (
        <>
            <div className="container about" id="about">
                <h2 className="text-center">About the {props.title}</h2>
                <p>Now a days, Digital Gadgets are so much alluring and attractive that people are ready to compromise with their health for using them all day even during bed time.
                    <br /> People are maintaining a bad sleep cycle due to these gadgets. This habit creates a lot of health issues and results in inability to perform to their maximum in their day time.
                    <br /> We have tried to solve this problem by creating "DORMIO" – a device that helps to avoid mobile phones during the mattress time. </p>
            </div>
        </>
    )
}

export default About
