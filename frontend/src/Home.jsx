import React from 'react'
import { Link } from 'react-router-dom'
import mn from './images/Screenshot 2023-08-23 145516.png'

export default function Home() {
  return (
    <>
<div class="njk">
<Link to={'/list'}>UserList</Link>&nbsp;
<Link to={'/add'}>AddUser</Link>
<Link to={'/add'}>LeaveRequest</Link>
    </div>
    <img src={mn} alt='fhgdfk' />
    </>
  )
}