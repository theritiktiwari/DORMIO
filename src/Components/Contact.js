import React, { useState } from 'react';
import { app } from '../firebase';
import { getDatabase, ref, set } from "firebase/database";

const Contact = () => {

    const database = getDatabase(app);

    const [data, setData] = useState({ name: "", email: "", message: "" });

    const ID = Math.floor(Math.random() * 9999999999);

    const submitQuery = (e) => {
        e.preventDefault();
        setData({ name: e.name, email: e.email, message: e.message });
        const time = new Date().toLocaleString();
        set(ref(database, 'query/' + ID), {
            username: data.name,
            email: data.email,
            message: data.message,
            completed: false,
            timestamp: time
        }).then(() => {
            alert("Successfully added query");
        }).catch((error) => {
            alert("Error adding query: " + error);
        });
        setData({ name: "", email: "", message: "" });
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container contact" id="contact">
                <div className="container">
                    <h2 className="text-center">Contact Us</h2>
                    <form className="my-4">
                        <div className="mb-3">
                            <label htmlFor="contactName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="contactName" name="name" value={data.name} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="contactEmail" name="email" aria-describedby="emailHelp" value={data.email} onChange={onChange}  required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Enter Your Message</label>
                            <textarea className="form-control" id="message" name="message" rows="3" value={data.message} onChange={onChange} required ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={submitQuery} >Submit Your Query</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
