import { useState } from 'react';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='width-screen h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='register' element={<Register />}/>
          <Route path='login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
