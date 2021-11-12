import React, { useState } from 'react'
import { useHistory } from "react-router";
import { db } from '../firebase';
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import Dashboard from './Dashboard';

const Nav = (props) => {
    const history = useHistory();
    const token = "my-secret-admin-login-token";

    const validate = async () => {
        //  get token 
        const getToken = localStorage.getItem('token');
        if (getToken === token) {
            return true;
        } else {
            return false;
        }
            



        // let su = [];
        // const q = await getDocs(query(collection(db, "superuser"), where("email", "==", props.adminEmail)));
        //     // .then(function (q) {
        //         q.forEach(function (doc) {
        //             su.push(doc.data());
        //         });
        //         console.log(su[0].active);
        //         return su[0].active;
            // });
        // getDocs(query(collection(db, "superuser"), where("email", "==", props.adminEmail)))
        //     .then(function (q) {
        //         q.forEach(function (doc) {
        //             su.push(doc.data());
        //         });
        //         console.log(su[0].active);
        //         return su[0].active;
        //     });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        if (!props.user) {
            try {
                // get the superuser from firestore
                let superuser = [];
                const querySnapshot = await getDocs(query(collection(db, "superuser"), where("email", "==", email)));
                querySnapshot.forEach(doc => {
                    superuser.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                if (superuser[0].password === password && superuser[0].email === email) {
                    // set active true in firestore
                    // await updateDoc(doc(db, "superuser", superuser[0].id), {
                    //     active: true
                    // });
                    localStorage.setItem('token', token);
                    history.push("/dashboard");
                    alert("Login Successful");
                } else {
                    alert("Invalid Credentials");
                }
            } catch (error) {
                alert("Error : " + error.message);
            }
        } else {
            alert("Unauthorized Access");
        }
    };

    const logout = async (e) => {
        e.preventDefault();
        try {
            // get the superuser from firestore
            // let su = [];
            // const querySnapshot = await getDocs(query(collection(db, "superuser"), where("email", "==", props.adminEmail)));
            // querySnapshot.forEach(doc => {
            //     su.push({
            //         id: doc.id,
            //         ...doc.data()
            //     });
            // });
            // await updateDoc(doc(db, "superuser", su[0].id), {
            //     active: false
            // });

            localStorage.removeItem('token');
            history.push("/");
            alert("Logout Successful");
        } catch (error) {
            alert("Error : " + error.message);
        }
    };

    return (
        <>
            {!props.user &&
                <div className="container">

                    {validate() && <div className="container admin-auth mb-4 ">
                        <h1 className="text-center my-4">Admin Login</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="loginemail" name="email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="loginpassword" name="password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100" onClick={login}>Login</button>
                        </form>
                    </div>}

                    {!validate() && <div className="container my-5">
                        <button className="btn btn-primary my-5" onClick={logout}>Logout</button>
                        <Dashboard />
                    </div>}
                </div>}
        </>
    )
}

export default Nav
