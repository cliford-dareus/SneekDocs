import React, { useState, ChangeEvent } from 'react';
import Form from '../../components/Form';

interface registerInterface {
    name: string;
    email: string;
    password: string
}

const Register = () => {
    const [ userInfo, setUserInfo ] = useState<registerInterface>({
        name: '',email: '', password: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, [event.target.name] : event.target.value});
    }

  return (
    <div className='width-full h-full flex flex-col justify-center items-center bg-black'>
        <h1 className='text-white text-2xl'>Register</h1>
        <form action="" 
            className='w-1/3 flex flex-col'
        >
           <Form
                name='name'
                placeholder='Name'
                value={userInfo.name}
                type='text'
                onchange={handleChange}
           />

            <Form 
                name='email'
                placeholder='Email'
                value={userInfo.email}
                type='email'
                onchange={handleChange}
            />

            <Form 
                name='password'
                placeholder='Password'
                value={userInfo.password}
                type='password'
                onchange={handleChange}
            />
            <button
                className='cursor-pointer mt-5 bg-sky-900 text-white py-2 rounded-md'
            >
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Register;