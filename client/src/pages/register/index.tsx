import React from 'react';

const Register = () => {
  return (
    <div className='width-full h-full flex flex-col justify-center items-center bg-violet-900'>
        <h1>Register</h1>
        <form action="" 
            className='w-1/3 flex flex-col'
        >
            <label htmlFor=""
                className='mt-3'
            >
                Name
            </label>
            <input 
                className='px-2 py-1 border-solid border outline-none mt-1'
                type="text" 
                placeholder='name'
            />

            <label htmlFor="">Email</label>
            <input 
                className='px-2 py-1'
                type="text" 
                placeholder='email'
            />
            <label htmlFor="">Password</label>
            <input 
                className='px-2 py-1'
                type="text" 
                placeholder='Password'
            />
            <button
                className='cursor-pointer'
            >
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Register;