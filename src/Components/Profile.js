import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { app, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, sendPasswordResetEmail, updateProfile, updateEmail } from "firebase/auth";

const Profile = (props) => {
    const history = useHistory();
    const { user } = props;
    const auth = getAuth(app);

    const [order, setOrder] = useState();

    getDoc(doc(db, "users", auth.currentUser.uid))
    .then((docs) => {
        setOrder(docs.data().orders);
    });

    const [data, setData] = useState({ name: user.displayName, email: user.email });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const update = (user) => {
        setData({ name: user.name, email: user.email });

        updateProfile(auth.currentUser, {
            displayName: data.name
        }) && updateEmail(auth.currentUser, data.email).then(() => {
            updateDoc(doc(db, "users", auth.currentUser.uid), {
                name: data.name,
                email: data.email
            });
            alert("Profile updated successfully");
            history.push('/');
        }).catch((error) => {
            alert("Error : " + error.message);
        });
    }

    const forgetPass = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, user.email);
            alert("Email sent to : " + user.email);
            history.push("/");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center">Welcome {user.displayName}</h1>
                <div className="container profile">
                    <form className="my-5">
                        <div className="mb-3">
                            <label htmlFor="profileName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="profileName" name="name" value={data.name} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profileEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="profileEmail" name="email" value={data.email} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profileOrder" className="form-label">Total Orders</label>
                            <input type="text" className="form-control" id="profileOrder" name="order" value={order} disabled required />
                        </div>
                        <button onClick={update} type="button" className="btn btn-outline-primary mb-2">Update</button>
                        <button onClick={forgetPass} className="btn btn-outline-danger">Change Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile
