import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

const Home = () => {
  return (
    <div className='width-full h-full text-white bg-black'>
      <Navbar />

      <main className='w-full px-8 py-4'>
        <section className='w-full md:w-3/4 h-60 m-auto flex gap-4'>
          <Link to='/create' className='w-full md:w-48 h-full bg-blue-800 flex items-center justify-center rounded-md'>Create Doc</Link>
          <Link to='/create' className='w-full md:w-48 h-full bg-blue-800 flex items-center justify-center rounded-md'>Create Doc</Link>
          <Link to='/create' className='hidden md:flex md:w-48 h-full bg-blue-800 items-center justify-center rounded-md'>Create Doc</Link>
          <Link to='/create' className='hidden md:flex md:w-48 h-full bg-blue-800 items-center justify-center rounded-md'>Create Doc</Link>
        </section>

        <section className='w-full md:w-3/4 h-96 m-auto mt-8 flex flex-col md:flex-row gap-4'>
          <Link to='/' className='w-full md:w-1/2 md:h-full flex h-1/2 bg-blue-900 rounded-md'></Link>
          <Link to='/' className='w-full md:w-1/2 md:h-full flex h-1/2 bg-blue-900 rounded-md'></Link>
        </section>
      </main>
    </div>
  )
}

export default Home;