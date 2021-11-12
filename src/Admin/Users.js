import React, { useState, useEffect } from 'react'
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Users = () => {
    const [users, setUsers] = useState([]);

    let data = [];
    const getUser = async () => {
        try {
            const user = await getDocs(collection(db, "users"));
            user.forEach((doc) => {
                data.push(doc.data());
            });
            setUsers(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            <div className="container my-4">
                <h1 className="text-center">Users</h1>

                <div className="container mt-3">
                    <div className="table-responsive">
                        <table className="table table-hover caption-top">
                            <caption className="mb-4 text-center">List of all the users</caption>
                            <thead className="table-dark">
                                <tr>
                                    <th className="text-center" scope="col">S. No.</th>
                                    <th className="text-center" scope="col">Name</th>
                                    <th className="text-center" scope="col">Email</th>
                                    <th className="text-center" scope="col">Orders</th>
                                    <th className="text-center" scope="col">Timestamp</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr> */}
                                    {users.map((user, index) => {
                                        return (
                                            <tr>
                                                <td className="text-center">{index + 1}</td>
                                                <td className="text-center">{user.name}</td>
                                                <td className="text-center">{user.email}</td>
                                                <td className="text-center">{user.orders}</td>
                                                <td className="text-center">{user.timestamp}</td>
                                            </tr>
                                        )
                                    })}
                                    {/* <th className='text-center' scope='row'>" . $i ."</th>
                                    <td className='text-center'>{users.name}</td>
                                    <td className='text-center'>theritiktiwari@gmail.com</td>
                                    <td className='text-center'>10/11/2021, 16:51:33</td> */}

                                    {/* <td className="d-flex justify-content-center align-items-center">
                                        <button className='btn btn-outline-primary mx-2 my-2' data-bs-toggle='modal' data-bs-target='#editUserModal" . $iid . "'>EDIT</button>
                                        <button className='delete btn btn-danger' id='del" . $iid . "'>DELETE</button>
                                    </td> */}
                                {/* </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
