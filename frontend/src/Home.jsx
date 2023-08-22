import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
       
<div class="njk">

<Link to={'/list'}>UserList</Link>&nbsp;
<Link to={'/add'}>AddUser</Link>
<Link to={'/notify'}>notify</Link>

    </div>
    </>

  )
}
