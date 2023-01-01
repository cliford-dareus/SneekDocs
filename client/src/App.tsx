import { useState } from 'react';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [ user, setUser ] = useState(localStorage.getItem('userInfo'));
  console.log(JSON.parse(user))

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
