import React, { useState, useEffect } from 'react'
import { getDatabase, ref, child, get, set } from "firebase/database";

const Query = () => {
    const db = getDatabase();
    const dbRef = ref(db);

    const [queries, setQueries] = useState([]);

    const getQuery = () => {
        let data = [];
        get(child(dbRef, "query/")).then((doc) => {
            if (doc.exists()) {
                doc.forEach((d) => {
                    data.push({ id: d.key, ...d.val() });
                });
                setQueries(data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getQuery();
        // eslint-disable-next-line
    }, []);

    const resolve = (id) => {
        get(child(dbRef, "query/" + id)).then((doc) => {
            let data = doc.val();
            data.completed = true;
            set(ref(db, 'query/' + id), data).then(() => {
                alert("Query Resolved");
            }).catch((error) => {
                alert("Error in resolving query: " + error);
            });
        })

    }

    return (
        <>
            <div className="container my-4">
                <h1 className="text-center">Queries</h1>

                <div class="container mt-3">
                    <div class="table-responsive">
                        <table class="table table-hover caption-top">
                            <caption class="mb-4 text-center">List of all the queries</caption>
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-center" scope="col">S. No.</th>
                                    <th class="text-center" scope="col">Name</th>
                                    <th class="text-center" scope="col">Email</th>
                                    <th class="text-center" scope="col">Message</th>
                                    <th class="text-center" scope="col">Timestamp</th>
                                    <th class="text-center" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {queries.map((query, index) => {
                                    return (
                                        <tr>
                                            <td class="text-center">{index + 1}</td>
                                            <td class="text-center">{query.username}</td>
                                            <td class="text-center">{query.email}</td>
                                            <td class="text-center">{query.message}</td>
                                            <td class="text-center">{query.timestamp}</td>
                                            <td className="text-center">
                                                {query.completed ? "Completed" : <button class='btn btn-outline-success' onClick={(id) => resolve(query.id)}>RESOLVE</button>}
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

export default Query
