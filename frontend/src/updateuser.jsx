import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link, BrowserRouter, useNavigate} from 'react-router-dom';
export default function Uppd() {

    const [user, setUser] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("")
    const [salary, setSalary] = useState("")
    const { id } = useParams();
    const navigate=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:9009/api/ListEmployee/' + id).then(u => {
            setUser(u.data);
            setFirstname(u.data.firstname)
            setLastname(u.data.lastname)
            setSalary(u.data.salary)
        })
    },[id]);
    const updateUser = () => {
        axios.put(`http://localhost:9009/api/updateEmployee/${id}`, { firstname, lastname, salary}).then(u => {
        })
        alert("data updated succesfully")
        navigate('/list');
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
                <label>First Name</label>
                <input type='text' defaultValue={user.firstname} onChange={(e) => setFirstname(e.target.value)} />
                <label>Last Name</label>
                <input type='text' defaultValue={user.lastname} onChange={(e) => setLastname(e.target.value)} />
                <label>Salary</label>
                <input type='number' defaultValue={user.salary} onChange={(e) => setSalary(e.target.value)} />
                <input type='submit' value='Update' className='btn btn-primary' />
            </form>

            </div>
        </div>

    )

}
