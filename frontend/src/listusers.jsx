import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = "http://localhost:9009/api/ListEmployee";

export default function Listusers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getusers();


    }, [users])
    function getusers() {
        axios.get(url).then(dt => {
            setUsers(dt.data);
        })
    }
    const deletuser = (id, e) => {
        axios.delete(`http://localhost:9009/api/DeleteEmployee/${id}`).then(r => {
            getusers();
        })
    }
    return (
        <>
            <ul className='nnnn'>


                <>
                <div class="njk">
<Link to={'/'}>Home</Link>&nbsp;
<Link to={'/add'}>AddUser</Link>
    </div>

                    <table border='doted'>
                        <thead>
                            <tr>

                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Salary</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               users.length<1? <p>No Users Found</p>:
                                users.map(uu => {
                                    return (
                                        <tr key={uu.id}>
                                            <td>{uu.firstname}</td>
                                            <td>{uu.lastname}</td>
                                            <td>{uu.salary}</td>
                                            <td>
                                                
                                                <Link to={'/list'} onClick={(e)=>deletuser(uu.id, e)}>Delete</Link>
                                                &nbsp;
                                                <Link to={`/Uppd/${uu.id}`}>Edit</Link>
                                            </td>

                                        </tr>
                                    )
                                })

                            }
                        </tbody>

                    </table>


                </>

            </ul>
            

        </>


    );

}
