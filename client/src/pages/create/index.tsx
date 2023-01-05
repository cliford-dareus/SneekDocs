import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTypeBold, BsTypeItalic } from 'react-icons/bs';

const CreateDoc = () => {
  const [ isInEditMode, setIsInEditMode ] = useState<Boolean>(true);
  const [ formatter, setFormatter ] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);
  const [ data, setData ] = useState('')
  
  useEffect(()=> {
    const element = ref.current;
    element!.addEventListener('dblclick', handleClick);

    return () => {
      element!.removeEventListener('dblclick', handleClick);
    };
  },[formatter]);

  const handleClick = (event: unknown) => {
    if(!isInEditMode || !formatter) return;
    const selObj = document.getSelection();
    const node = document.createElement(formatter)
    node.textContent = ' '+ selObj!.toString();
    
    selObj!.deleteFromDocument();
    
    const selRange = selObj!.getRangeAt(0);
    selRange.insertNode(node)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const text = document.querySelector('.editor');
      console.log(text?.innerHTML);
      localStorage.setItem('text', text?.innerHTML!)
      const e = document.createElement('p');
      e.textContent = localStorage.getItem('text')
      text?.append(e)
    }, 15000)

    return ()=> {
      clearInterval(interval);
    };
  },[]);

  console.log(data)
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
        <p className='text-black bg-white absolute top-3 w-full h-11'>{localStorage.getItem('text')}</p>
      </main>
    </div>
  )
}

export default CreateDoc;