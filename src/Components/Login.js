import React, { useState } from "react";
import { app } from "../firebase";
import { useHistory } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const history = useHistory();

    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/");
            window.location.reload();
        } catch (error) {
            alert("Error : " + error.message);
        }
    };
    return (
        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container auth mb-4">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="loginEmail" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="loginEmail" name="email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="loginPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="loginPassword" name="password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" onClick={login}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login



