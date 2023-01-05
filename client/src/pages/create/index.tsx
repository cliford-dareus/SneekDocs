import React from 'react';
import { Link } from 'react-router-dom';
import { BsTypeBold } from 'react-icons/bs'

const CreateDoc = () => {
  return (
    <div className='bg-black h-full'>
      
      <div className='w-full py-4 px-8'>
        <Link to='/' className='text-2xl text-white'>SNEEKDOCS</Link>
      </div>
      <main className='px-8 py-4'>
        {/* Format toolbar */}
        <div className='w-3/4 h-20 flex gap-4 m-auto text-white  '>
            <div> <BsTypeBold /> </div>
        </div>

        {/* Text editor */}
        <div contentEditable className='w-3/4 m-auto bg-blue-300 h-96'>

        </div>
      </main>
    </div>
  )
}

export default CreateDoc;