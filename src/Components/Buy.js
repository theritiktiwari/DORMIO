import React, { useState } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import { app, db } from '../firebase';
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

const Buy = (props) => {
    const database = getDatabase(app);
    const auth = getAuth(app);

    const [data, setData] = useState({ firstName: "", lastName: "", email: "", mobile: "", address: "", city: "", zip: "" });
    const [region, setRegion] = useState();

    const [orderNum, setOrderNum] = useState();

    getDoc(doc(db, "users", auth.currentUser.uid))
    .then((docs) => {
        setOrderNum(docs.data().orders);
    });

    const ID = auth.currentUser.uid + "-" + (orderNum + 1);

    const order = (e) => {
        e.preventDefault();
        if (!e.firstName && !e.lastName && !e.email && !e.mobile && !e.address && !region && !e.city && !e.zip) {
            alert("Please fill all the fields");
        } else {
            setData({ firstName: e.firstName, lastName: e.lastName, email: e.email, address: e.address, city: e.city, zip: e.zip });
            const time = new Date().toLocaleString();
            set(ref(database, 'order/' + ID), {
                name: data.firstName + " " + data.lastName,
                email: data.email,
                mobile: data.mobile,
                address: data.address,
                state: region,
                city: data.city,
                zip: data.zip,
                completed: false,
                timestamp: time
            }).then(() => {
                updateDoc(doc(db, "users", auth.currentUser.uid), {
                    orders: orderNum + 1
                });
                alert("Your order is placed");
            }).catch((error) => {
                alert("Error placing the order: " + error);
            });
            setData({ firstName: "", lastName: "", email: "", mobile: "", address: "", city: "", zip: "" });
            setRegion();
        }
    }

    const selectRegion = (val) => {
        setRegion(val);
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* <h1 className="text-center my-4 px-2">{props.title} isn't available right now. </h1><br /><h3 className="fs-3 text-center text-danger">Coming Soon</h3> */}
            <div className="container contact" id="contact">
                <div className="container">
                    <h2 className="text-center my-4">Delivery Details</h2>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={data.firstName} onChange={onChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={data.lastName} onChange={onChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="deliveryEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="deliveryEmail" name="email" value={data.email} onChange={onChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="deliveryMobile" className="form-label">Mobile Number</label>
                            <input type="phone" className="form-control" id="deliveryMobile" name="mobile" value={data.mobile} onChange={onChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" value={data.address} onChange={onChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="state" className="form-label">State</label>
                            <RegionDropdown className="form-select" id="state" name="state"
                                defaultOptionLabel=""
                                country="India"
                                onChange={(val) => selectRegion(val)}
                                value={region} required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" id="city" value={data.city} onChange={onChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="zip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="zip" name="zip" value={data.zip} onChange={onChange} required />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit" onClick={order} >Place the order</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Buy
