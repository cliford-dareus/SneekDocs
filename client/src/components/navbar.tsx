import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Navbar = () => {
  return (
    <header className='w-full h-20 fixed top-0 left-0 z-20 bg-black flex justify-between items-center py-4 px-4 border-b'>
        <Link to='/' className='text-2xl text-white'>SNEEKDOCS</Link>
        {<div className='hidden md:flex w-1/3'>
           <Form 
                name=''
                placeholder='Search'
                value=''
                type='search'
                onchange={()=>{}}
            /> 
        </div>}
        
        <div className=''>
            <div className='flex items-center gap-4'>
                <p className='text-xs text-white'>Welcome, <br/> <b className='text-sm'>Cliford</b> </p>
                <div className='w-10 h-10 rounded-full bg-yellow-300 overflow-hidden'></div>
            </div>
        </div>
    </header>
  )
}

export default Navbar;