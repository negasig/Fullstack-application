import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Add() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("")
  const [salary, setSalary] = useState("")
  const registeruser = () => {
    const userrr = { firstname: firstname, lastname: lastname, salary: salary};
    axios.post("http://localhost:9009/api/AddEmployee", userrr);
  
  }
  return(
    <>
      <div class="njk">
<Link to={'/'}>Home</Link>&nbsp;
<Link to={'/list'}>UserList</Link>
    </div>
  <p>Register user</p>

      
          <form onSubmit={registeruser}>
            <label>Fisrst Name</label>
              <input type="text" name="employee_name" onChange={(e) => setFirstname(e.target.value)} />
              <label>Last Name</label>
              <input type="text" name="employee_salary" onChange={(e) => setLastname(e.target.value)} />
              <label>Salary</label>
              <input type="number" name="employee_age" onChange={(e) => setSalary(e.target.value)} />
              <input type='submit' />
          </form>
      </>

)
  



}
