import React from 'react';
import { Link } from 'react-router-dom';
import { BsTypeBold, BsTypeItalic } from 'react-icons/bs'

const CreateDoc = () => {


  return (
    <div className='bg-black h-full'>
      <div className='w-full py-4 px-8'>
        <Link to='/' className='text-2xl text-white'>SNEEKDOCS</Link>
      </div>
      <main className='px-8 py-4 h-5/6'>
        {/* Format toolbar */}
        <div className='w-3/4 h-8 flex items-center justify-center gap-4 m-auto bg-white border-b border-black'>
            <div> <BsTypeBold /> </div>
            <div> <BsTypeItalic /> </div>
            <div> <BsTypeBold /> </div>
            <div> <BsTypeBold /> </div>
            <div> <BsTypeBold /> </div>
        </div>

        {/* Text editor  need word wraps too */}
        <div contentEditable className='w-3/4 m-auto bg-white h-full overflow-auto p-3'>

        </div>
      </main>
    </div>
  )
}

export default CreateDoc;