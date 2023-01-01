import React, { useState, ChangeEvent, FormEvent } from 'react';
import Form from '../../components/Form'; 
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { useRegisterUserMutation } from '../../features/api';
import { Link } from 'react-router-dom';

interface registerInterface {
    name: string;
    email: string;
    password: string
};

const Register = () => {
    const [ registerUser, { isLoading } ] = useRegisterUserMutation();
    const [ userInfo, setUserInfo ] = useState<registerInterface>({
        name: '',email: '', password: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, [event.target.name] : event.target.value});
    };

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const{ name, email, password } = userInfo;
        const body = {name, email, password };

        if(!name || !email) {
            console.log('provide name and email');
        }
    
        try {
            registerUser(body);
            setUserInfo({ name: '', email: '', password: ''})
        } catch (error) {
            console.log(error)
        }

    };

  return (
    <div className='width-full h-full flex flex-col justify-center items-center bg-black'>
        <h1 className='text-white text-2xl'>Register</h1>

        <form action="" 
            className='w-1/3 flex flex-col'
            onSubmit={onSubmitHandler}
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

            <p className='text-white mt-5 text-md'>Don't have an account yet! <Link className='text-sky-700 underline' to='/login'>Sign Up Here</Link></p>
        </form>
    </div>
  )
}

export default Register;