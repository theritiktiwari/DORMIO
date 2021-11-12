import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Time = (props) => {
    const [time, setTime] = useState();

    const updateTime = () => {
        const date = new Date()
        const mode = date.getHours() < 12 ? 'AM' : 'PM';
        let hours = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours();
        hours = (hours === 0) ? 12 : hours;
        hours = (hours < 10) ? "0" + hours : hours;
        const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
        const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        setTime(`${hours}:${minutes}:${seconds} ${mode}`);
    }

    setInterval(updateTime, 1000);

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#FFF" }}>
                <div className="container time">
                    <div className="left p-3">
                        {time}
                    </div>
                    <div className="right">
                        {!props.user && <Link to="/dashboard" className="text-decoration-none admin">ADMIN LOGIN</Link>}
                        {props.user && <p className="admin">Hello {props.user.displayName}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time
