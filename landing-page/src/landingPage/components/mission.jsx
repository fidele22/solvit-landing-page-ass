import React, { useState } from 'react';
// import { MdMenuBook,FaBook,GiBookshelf } from 'react-icons/fa'
import photo from '../assets/coffee.jpg'
import missionImage from '../assets/mission.jpg'

const missionData =[{
    text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste illum eligendi consequuntur architecto eos corrupti minus, numquam dolores omnis tempora non eveniet maiores qui quia fuga at quaerat vero ipsa'
},
{
  text:'Iste illum eligendi consequuntur architecto eos corrupti minus, numquam dolores omnis tempora non eveniet maiores qui quia fuga at quaerat vero ipsa'
}]
const BenefitSection = () => {
 const textPerPage=1;
 const [pageIndex,setPageIndex ]= useState(0);

 const totalPage = Math.ceil(missionData.length/textPerPage);
 const currentPage =missionData.slice(
     pageIndex*textPerPage,
     (pageIndex+1)*textPerPage

 )


  return (
   
        <section className='w-full h-full px-6 relative bg-cover bg-center items-center justify-center' 
        style={{backgroundImage:`url(${missionImage})`}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className='relative'>
           <h1 className='text-center text-4xl font-bold p-10 text-white'><span>Our</span> Mission</h1>
           {/* <p className='text-white text-center lg:px-50 ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi delectus pariatur odit explicabo numquam porro similique ratione, voluptatum corrupti ea commodi.
             Debitis dicta, illum conse  quuntur maxime asperiores vero delectus. Ullam.</p> */}
             <div className='py-10'>
              {currentPage.map((data,index)=>(
                <div key={index}>
                <p className='text-white text-center lg:px-50 '>{data.text}</p>
                
                </div>
              ))}
            
          
             {/* like pagination */}
             <div className='flex gap-5 py-5 justify-center items-center text-center'>
              {Array.from({length: totalPage}).map((_,idx)=>(

                  <button className='w-20 h-2 rounded bg-[var(--color-brand)]'
                  value={idx}
                  onClick={pageIndex===idx}
                  onChange={()=>setPageIndex(idx)}></button>
              )
              )}
            
             </div>
          </div>
              </div>
        </section>

    

  );
};

export default BenefitSection;
