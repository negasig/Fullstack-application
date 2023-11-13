
import Listusers from './listusers'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './Protectedroute';
import Add from './Add';
import Uppd from './updateuser';
import Home from './Home';
import { Login } from '@mui/icons-material';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Login />}/>
      <Route element={<Protected />}>
      <Route index element={<Home />}/>
      <Route path ='/list' element={<Listusers />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/Uppd/:id' element={<Uppd />}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )

}

export default App;

