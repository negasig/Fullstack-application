
import axios from 'axios';
import { useEffect, useState } from 'react';
import Listusers from './listusers'
import './App.css';
import Modalsexcersie from './modalsexcersie'
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Add from './Add';
import Uppd from './updateuser';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path ='/list' element={<Listusers />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/Uppd/:id' element={<Uppd />}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App;

