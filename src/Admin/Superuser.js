import React, { useState } from 'react'
import { useHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import Dashboard from './Dashboard';
import Nav from './Nav';
import Users from './Users';
import Query from './Query';
import Order from './Order';

const Superuser = (props) => {
    const history = useHistory();
    const token = "my-secret-admin-login-token";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        //  get token 
        const getToken = localStorage.getItem('token');
        if (getToken === token) {
            return true;
        } else {
            return false;
        }
    }

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
                    // set the token
                    localStorage.setItem('token', token);
                    history.push('/dashboard');
                    window.location.reload();
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

    return (
        <>
            {!props.user &&
                <div className="container-fluid p-0">

                    {!validate() && <div className="container admin-auth auth mb-4 position-absolute top-50 start-50 translate-middle">
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

                    {validate() && <div className="container-fluid p-0">
                        <Router>
                            <Nav title={props.title} />
                            <Switch>
                                <Route exact path="/dashboard" >
                                    <Dashboard />
                                </Route>
                                <Route exact path="/dashboard/users" >
                                    <Users />
                                </Route>
                                <Route exact path="/dashboard/queries" >
                                    <Query />
                                </Route>
                                <Route exact path="/dashboard/orders" >
                                    <Order />
                                </Route>
                            </Switch>
                        </Router>
                    </div>}
                </div>}
                {props.user && history.push("/")}
        </>
    )
}

export default Superuser
