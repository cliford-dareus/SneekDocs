import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import { useLoginUserMutation } from '../../features/api';

interface loginInerface {
    email: string,
    password: string
};

const Login = () => {
    const [ loginUser, { data } ] = useLoginUserMutation();
    const [ userInfo, setUserInfo ] = useState<loginInerface>({ email: '', password: '' });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = userInfo;

         try {
            if(!email || !password){
                console.log('email please')
                return
            };
            const body = { email, password };
            loginUser(body);
            console.log(data);
            setUserInfo({ email: '', password: '' });
         } catch (error) {
            console.log(error);
         }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value })        
    };

  return (
    <div className='width-full h-full flex flex-col justify-center items-center bg-black'>
        <h1 className='text-white text-2xl'>Login</h1>

        <form
            className='w-1/3 flex flex-col'
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

            <p className='text-white mt-5 text-md'>Don't have an account yet! <Link className='text-sky-700 underline' to='/register'>Sign Up Here</Link></p>
        </form>
    </div>
  )
}

export default Login;