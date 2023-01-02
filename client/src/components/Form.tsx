import React, { ChangeEventHandler } from 'react';

interface form{
    name: string;
    placeholder: string;
    value: string;
    type: string;
    onchange: ChangeEventHandler
}

const Form = ({name, placeholder, value, type, onchange}: form) => {
  return (
    <>
        <label  
            htmlFor=""
            className='mt-5 text-white'
        >
            {name}
        </label>
        <input 
            className='w-full px-2 py-1 border-solid border rounded-md outline-none mt-1 '
            name = {name}
            type = {type}
            placeholder = {placeholder}
            value={value}
            onChange = {onchange}
        /> 
    </>
  )
}

export default Form;