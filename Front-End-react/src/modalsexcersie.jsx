import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'



import { Modal } from 'bootstrap';
import React, { useState } from 'react'

export default function Modalsexcersie() {
    const[isOpen, setIsopen]=useState(false);
  return (
    <>
    <div>modalsexcersie</div>
<button onClick={openModal}>open</button>
    </>

  )
  function openModal(){
setIsopen(true);
  }
  function closeModal(){
    setIsopen(false);
  }
}
