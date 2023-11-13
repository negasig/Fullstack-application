import Login from './login';
import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Protectedroute() {
    var islogedIn=true;
  return islogedIn ? <Outlet />:<Login />
  
}
