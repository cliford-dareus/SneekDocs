import React from 'react';
import Navbar from '../../components/navbar';

const Home = () => {
  return (
    <div className='width-full h-full text-white bg-black'>
      <Navbar />

      <main className='w-full px-8 py-4'>
        <section>Document</section>
        <section></section>
      </main>
    </div>
  )
}

export default Home;