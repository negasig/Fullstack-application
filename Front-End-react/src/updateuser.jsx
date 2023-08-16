import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getusers from './listusers'
import { Link } from 'react-router-dom';

export default function Uppd() {

    const [user, setUser] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("")
    const [salary, setSalary] = useState("")
    const [answer, setAnswer] = useState("")
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:9009/api/ListEmployee/' + id).then(u => {
            setUser(u.data);
            setFirstname(u.data.firstname)
            setLastname(u.data.lastname)
            setSalary(u.data.salary)
        })
    },[]);
    const updateUser = () => {
        axios.put(`http://localhost:9009/api/updateEmployee/${id}`, { firstname, lastname, salary, answer }).then(u => {
            getusers();
        })
    }
    return (

        <div class="mmm">
            <div class="njk">
                <Link to={'/'}>Home</Link>&nbsp;
                <Link to={'/list'}>UserList</Link>&nbsp;
                <Link to={'/add'}>AddUser</Link>
            </div>
            <div class='up'>
            <form onSubmit={updateUser}>
                <input type='text' defaultValue={user.firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type='text' defaultValue={user.lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type='number' defaultValue={user.salary} onChange={(e) => setSalary(e.target.value)} />
                <input type='text' defaultValue={user.answer} onChange={(e) => setAnswer(e.target.value)} />
                <input type='submit' value='Update' className='btn btn-primary' />
            </form>

            </div>
        </div>

    )

}