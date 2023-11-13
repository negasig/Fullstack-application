import React, { useState } from 'react'
import Protectedroute from './Protectedroute'
export default function Login() {
    const[username, setusernam]=useState("");
    const[password, setpassword]=useState("");
    const handlesubmit=()=>{
        console.log(username);
    }
  return (
    <>
        <div>Login</div>
        <form onSubmit={handlesubmit}>
        <input type='text' name='uname' onChange={(e)=>setusernam(e.target.value)}/>
        <input type='text' name='password' onChange={(e)=>setpassword(e.target.value)} />
        <input type='submit' value='register'/>

        </form>
    </>

  )
}
