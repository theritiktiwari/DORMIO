import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { app, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { getAuth, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const history = useHistory();

    const auth = getAuth(app);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');

    const signup = async (e) => {
        e.preventDefault();
        try {
            if (password !== cpassword) {
                alert('Password do not match');
            }
            else {
                await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(auth.currentUser, {
                    displayName: name
                });
                try {
                    const user = auth.currentUser;
                    const time = new Date().toLocaleString();
                    await setDoc(doc(db, "users", auth.currentUser.uid), {
                        id: auth.currentUser.uid,
                        name: user.displayName,
                        email: user.email,
                        orders: 0,
                        timestamp: time
                    });
                } catch (e) {
                    console.error("Error adding user details: ", e);
                }
                alert('Account Created');
                history.push('/');
                window.location.reload();
            }
        } catch (error) {
            alert("Error : " + error.message);
        }
    }
    return (
        <>
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signupModalLabel">Sign up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container auth mb-4">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={(e) => setcPassword(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" onClick={signup}>Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup