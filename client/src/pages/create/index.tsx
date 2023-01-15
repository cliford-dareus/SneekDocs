import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTypeBold, BsTypeItalic } from 'react-icons/bs';

const CreateDoc = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [ isInEditMode, setIsInEditMode ] = useState<Boolean>(true);
  const [ formatter, setFormatter ] = useState<string>('');
  const [ data, setData ] = useState<string | undefined>('');

  const startTyping = (event: any) => {
    const textNode = document.querySelector('.editor');
    setData(event?.target?.innerHTML);
    console.log(event.target)
    // div?.append(node);
  };

  return (
    <div className='bg-black h-full'>
      <div className='w-full py-4 px-8'>
        <Link to='/' className='text-2xl text-white'>SNEEKDOCS</Link>
      </div>

      <main className='px-8 py-4 h-5/6'>
        {/* Format toolbar */}
        <div className='w-3/4 h-8 flex items-center justify-center gap-4 m-auto bg-white border-b border-black'>
            <div onClick={() => setFormatter('b')}> <BsTypeBold /> </div>
            <div onClick={() => setFormatter('i')}> <BsTypeItalic /> </div>
            <div> <BsTypeBold /> </div>
            <div> <BsTypeBold /> </div>
            <div> <BsTypeBold /> </div>
        </div>

        {/* Text editor  need word wraps too */}
        <div ref={ref} contentEditable className='editor w-3/4 m-auto bg-white h-full overflow-auto p-3'>
        </div>
      </main>
    </div>
  )
}

export default CreateDoc;