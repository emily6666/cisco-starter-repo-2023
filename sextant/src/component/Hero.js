import React from 'react';
import Sidemenu from './Sidemenu';
import Cards from './Cards';

const Hero = () => {
  return (
    <div className='p-6 flex gap-10 font-bold w-screen h-screen'>
      <Sidemenu />
      <Cards />
    </div>
  );
}

export default Hero;