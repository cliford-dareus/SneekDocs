import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

const Home = () => {
  return (
    <div className='width-full h-full text-white bg-black'>
      <Navbar />

      <main className='w-full px-8 py-4'>
        <section className='w-4/5 h-60 m-auto flex gap-4'>
          <Link to='/create' className='w-48 h-full bg-blue-800 flex items-center justify-center rounded-md'>Create Doc</Link>
          <Link to='/create' className='w-48 h-full bg-blue-800 flex items-center justify-center rounded-md'>Create Doc</Link>
          <Link to='/create' className='w-48 h-full bg-blue-800 flex items-center justify-center rounded-md'>Create Doc</Link>
          <Link to='/create' className='w-48 h-full bg-blue-800 flex items-center justify-center rounded-md'>Create Doc</Link>
        </section>

        <section className='w-4/5 h-96 m-auto mt-8 flex gap-4'>
          <Link to='/' className='w-1/2 flex h-full bg-blue-900 rounded-md'></Link>
          <Link to='/' className='w-1/2 flex h-full bg-blue-900 rounded-md'></Link>
        </section>
      </main>
    </div>
  )
}

export default Home;