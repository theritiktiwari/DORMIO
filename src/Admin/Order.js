import React, { useState, useEffect } from 'react'
import { getDatabase, ref, child, get, set } from "firebase/database";

const Order = () => {
    const db = getDatabase();
    const dbRef = ref(db);

    const [orders, setOrders] = useState([]);

    const getOrder = () => {
        let data = [];
        get(child(dbRef, "order/")).then((doc) => {
            if (doc.exists()) {
                doc.forEach((d) => {
                    data.push({ id: d.key, ...d.val() });
                });
                setOrders(data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getOrder();
        // eslint-disable-next-line
    }, []);

    const resolve = (id) => {
        get(child(dbRef, "order/" + id)).then((doc) => {
            let data = doc.val();
            data.completed = true;
            set(ref(db, 'order/' + id), data).then(() => {
                alert("Order Resolved");
            }).catch((error) => {
                alert("Error in resolving order: " + error);
            });
        })

    }
    return (
        <>
            <div className="container my-4">
                <h1 className="text-center">Orders</h1>

                <div class="container mt-3">
                    <div class="table-responsive">
                        <table class="table table-hover caption-top">
                            <caption class="mb-4 text-center">List of all the orders</caption>
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-center" scope="col">S. No.</th>
                                    <th class="text-center" scope="col">Name</th>
                                    <th class="text-center" scope="col">Email</th>
                                    <th class="text-center" scope="col">Mobile</th>
                                    <th class="text-center" scope="col">Address</th>
                                    <th class="text-center" scope="col">Time</th>
                                    <th class="text-center" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody style={{textTransform: "none"}}>
                                {orders.map((order, index) => {
                                    return (
                                        <tr>
                                            <td class="text-center">{index + 1}</td>
                                            <td class="text-center">{order.name}</td>
                                            <td class="text-center">{order.email}</td>
                                            <td class="text-center">{order.mobile}</td>
                                            <td class="text-center">{order.address + ", " + order.city + ", " + order.state + ", " + order.zip}</td>
                                            <td class="text-center">{order.timestamp}</td>
                                            <td className="text-center">
                                                {order.completed ? "Completed" : <button class='btn btn-outline-success' onClick={(id) => resolve(order.id)}>RESOLVE</button>}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order
