import React from 'react';
// import { MdMenuBook,FaBook,GiBookshelf } from 'react-icons/fa'
import photo from '../assets/coffee.jpg'
import missionImage from '../assets/mission.jpg'
const BenefitSection = () => {
  return (
   
        <section className='w-full h-full px-6 relative bg-cover bg-center items-center justify-center' 
        style={{backgroundImage:`url(${missionImage})`}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className='relative'>
           <h1 className='text-center text-4xl font-bold p-10 text-white'><span>Our</span> Mission</h1>
           <p className='text-white text-center lg:px-50 ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi delectus pariatur odit explicabo numquam porro similique ratione, voluptatum corrupti ea commodi.
             Debitis dicta, illum consequuntur maxime asperiores vero delectus. Ullam.</p>
          </div>
           
        </section>

    

  );
};

export default BenefitSection;
