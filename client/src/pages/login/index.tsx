import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { useLoginUserMutation } from '../../features/api';
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { setUser } from '../../features/global';

interface loginInerface {
    email: string,
    password: string
};

const Login = () => {
    const dispatch = useAppDispatch();
    const [ loginUser, { data, isSuccess } ] = useLoginUserMutation();
    const [ userInfo, setUserInfo ] = useState<loginInerface>({ email: '', password: '' });
    const Navigate = useNavigate();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = userInfo;

        if(!email || !password){
            console.log('email please')
            return
        };

        try {
            const body = { email, password };
            loginUser(body);
            setUserInfo({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value })        
    };

    useEffect(()=> {
        if(isSuccess){
            dispatch(setUser(data))
            Navigate('/');
        }
    }, [ isSuccess ]);

  return (
    <div className='width-full h-full p-8 flex flex-col justify-center items-center bg-black'>
        <h1 className='text-white text-2xl'>Login</h1>

        <form
            className='w-full md:w-1/2 flex flex-col'
            onSubmit={onSubmit}
        >
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
                Sign In
            </button>

            <p className='text-white mt-5 text-md'>Don't have an account yet! <Link className='text-sky-700 underline ml-2' to='/register'>Sign Up Here</Link></p>
        </form>
    </div>
  )
}

export default Login;