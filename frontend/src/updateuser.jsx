import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
export default function Uppd() {

    const [user, setUser] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("")
    const [salary, setSalary] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:9009/api/ListEmployee/' + id).then(u => {
            setUser(u.data);
            setFirstname(u.data.firstname)
            setLastname(u.data.lastname)
            setSalary(u.data.salary)
        })
    }, [id]);
    const updateUser = () => {
        axios.put(`http://localhost:9009/api/updateEmployee/${id}`, { firstname, lastname, salary }).then(u => {
        })
        alert("data updated succesfully")
        navigate('/list');
    }
    return (

        <div class="mmm">
            <div class="njk">
                <Link to={'/'}>Home</Link>&nbsp;
                <Link to={'/add'}>AddUser</Link>
                <Link to={'/add'}>LeaveRequest</Link>
                <Link to={'/add'}>AddUser</Link>
            </div>
            <div class='up'>
                <form onSubmit={updateUser}>
                    <label>ID</label>
                    <input type='text' defaultValue={user.id} readOnly />
                    <label>First Name</label>
                    <input type='text' defaultValue={user.firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <label>Last Name</label>
                    <input type='text' defaultValue={user.lastname} onChange={(e) => setLastname(e.target.value)} />
                    <label>Salary</label>
                    <input type='number' defaultValue={user.salary} onChange={(e) => setSalary(e.target.value)} />
                    <button type='submit'>Update</button>
                </form>

            </div>
        </div>

    )

}
