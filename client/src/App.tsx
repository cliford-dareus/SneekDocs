import { useState } from 'react';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/protectedRoutes';
import Home from './pages/dashbord';

function App() {
  return (
    <div className='width-screen h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='register' element={<Register />}/>
          <Route path='login' element={<Login />}/>

          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
