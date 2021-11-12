import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
    const dbRef = ref(getDatabase());
    
    const [orderCount, setOrderCount] = useState(0);
    const [queryCount, setQueryCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [adminCount, setAdminCount] = useState(0);
    const [activeOrderCount, setActiveOrderCount] = useState(0);
    const [activeQueryCount, setActiveQueryCount] = useState(0);

    const fun = (data) => {
        let count = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i].completed === false)
                count++;
        }
        return count;
    }
    const getOrderCount = () => {
        let data = [];
        get(child(dbRef, "order/")).then((doc) => {
            if (doc.exists()) {
                doc.forEach((d) => {
                    data.push(d.val());
                });
                setOrderCount(data.length);
                setActiveOrderCount(fun(data));
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    const getQueryCount = () => {
        let data = [];
        get(child(dbRef, "query/")).then((doc) => {
            if (doc.exists()) {
                doc.forEach((d) => {
                    data.push(d.val());
                });
                setQueryCount(data.length);
                setActiveQueryCount(fun(data));
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    const getUserCount = async () => {
        let data = [];
        try {
            const user = await getDocs(collection(db, "users"));
            user.forEach((doc) => {
                data.push(doc.data());
            });
            setUserCount(data.length);
        }
        catch (error) {
            console.error(error);
        }
    }

    const getAdminCount = async () => {
        let data = [];
        try {
            const user = await getDocs(collection(db, "superuser"));
            user.forEach((doc) => {
                data.push(doc.data());
            });
            setAdminCount(data.length);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getOrderCount();
        getQueryCount();
        getUserCount();
        getAdminCount();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="container my-4">
                <h1 className="text-center">Dashboard</h1>
                <div className="card-row my-4">
                    <div className="card mx-2" id="c1" style={{ width: "18rem" }}>
                        <Link to="/dashboard/users" className="text-decoration-none card-link">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-3"><i className="fa fa-users fa-3x"></i></h2>
                                <h4 className="card-text text-center py-4">{userCount < 2 ? userCount + " User" : userCount + " Users"}</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="card mx-2" id="c2" style={{ width: "18rem" }}>
                        <Link to="/dashboard/queries" className="text-decoration-none card-link">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-3"><i className="fa fa-question fa-3x"></i></h2>
                                <h4 className="card-text text-center py-4">{activeQueryCount < 2 ? activeQueryCount + " Active Query" : activeQueryCount + " Active Queries"}</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="card mx-2" id="c3" style={{ width: "18rem" }}>
                        <Link to="/dashboard/orders" className="text-decoration-none card-link">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-3"><i className="fa fa-award fa-3x"></i></h2>
                                <h4 className="card-text text-center py-4">{activeOrderCount < 2 ? activeOrderCount + " Active Order" : activeOrderCount + " Active Orders"}</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="card mx-2" id="c4" style={{ width: "18rem" }}>
                        <Link to="/dashboard/queries" className="text-decoration-none card-link">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-3"><i className="fa fa-question fa-3x"></i></h2>
                                <h4 className="card-text text-center py-4">{queryCount < 2 ? queryCount + " Query" : queryCount + " Queries"}</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="card mx-2" id="c5" style={{ width: "18rem" }}>
                        <Link to="/dashboard/orders" className="text-decoration-none card-link">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-3"><i className="fa fa-award fa-3x"></i></h2>
                                <h4 className="card-text text-center py-4">{orderCount < 2 ? orderCount + " Order" : orderCount + " Orders"}</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="card mx-2" id="c6" style={{ width: "18rem" }}>
                        <Link to="/dashboard" className="text-decoration-none card-link">
                            <div className="card-body">
                                <h2 className="card-title text-center pt-3"><i className="fa fa-user fa-3x"></i></h2>
                                <h4 className="card-text text-center py-4">{adminCount < 2 ? adminCount + " Admin" : adminCount + " Admins"}</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
