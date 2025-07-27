import React from 'react';

import photo from '../assets/coffee.jpg'

const BenefitSection = () => {
  return (
     <div className="lg:px-25 w-full mt-30 mb-30">
        <div className='text-center lg:justify-center'>
        <h2 className='py-3 text text-[var(--color-brand)]'>Your Benefits</h2>
        
        <h1 className='text-3xl font-bold'>Why Choose Us</h1>

        <p className='lg:px-70 py-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium quas error eos alias impedit adipisci ipsum, consequatur at quam tempora! 
            Eum corrupti fugit sapiente, fugiat nulla quidem odit hic.</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12'>

            <div className='justify-center p-3 lg:pl-13'>
              <div className='bg-[var(--color-greenwhite)] rounded p-8 lg:w-60 mb-10 text-center'>
                    <span className='text-center bg-[var(--color-brand)] p-4 text-2xl rounded-full' 
                    style={{width:'20px'}}><i className="fas fa-book"></i></span>
                    <h1 className='font-bold text-20 py-2 text-center mt-5'>creative space</h1>Font Awesome via CDN
                    <p className='justify-center text-center'> laudantium at lla aperiam, a atque sequi?</p>
                </div>

               <div className='bg-[var(--color-greenwhite)] rounded p-8 lg:w-60 mb-10 text-center'>
                    <span className='text-center bg-[var(--color-brand)] p-4 text-2xl rounded-full' 
                    style={{width:'20px'}}><i className="fas fa-book"></i></span>
                    <h1 className='font-bold text-20 py-2 text-center mt-5'>High speed wifi</h1>
                    <p className='justify-center text-center'> laudantium at lla aperiam, a atque sequi?</p>
                </div>

                 <div className='bg-[var(--color-greenwhite)] rounded p-8 lg:w-60 text-center'>
                    <span className='text-center bg-[var(--color-brand)] p-4 text-2xl rounded-full' 
                    style={{width:'20px', height:'17px'}}><i className="fas fa-book"></i></span>
                    <h1 className='font-bold text-20 py-2 text-center mt-5'>Parking area</h1>
                    <p className='justify-center text-center'> laudantium at lla aperiam, a atque sequi?</p>
                </div>
              
            </div>
            <div className=''>
                <img src={photo} alt="" className='h-full' />
            </div>
           
            <div className='justify-center p-3 lg:pl-13'> 
                <div className='bg-[var(--color-greenwhite)] rounded p-8 lg:w-60 mb-10 text-center'>
                    <span className='text-center bg-[var(--color-brand)] p-4 text-2xl rounded-full' 
                    style={{width:'20px'}}><i className="fas fa-book"></i></span>
                    <h1 className='font-bold text-20 py-2 text-center mt-5'>24/7 Access</h1>
                    <p className='justify-center text-center'> laudantium at lla aperiam,</p>
                </div>

                 <div className='bg-[var(--color-greenwhite)] rounded p-8 lg:w-60 mt-10 text-center'>
                    <span className='text-center bg-[var(--color-brand)] p-4 text-2xl rounded-full' 
                    style={{width:'20px'}}><i className="fas fa-book"></i></span>
                    <h1 className='font-bold text-20 py-2 text-center mt-5'>Great Location</h1>
                    <p className='justify-center text-center'>illo nulla aperiam, autem commodi.</p>
                </div>

                   <div className='bg-[var(--color-greenwhite)] rounded p-8 lg:w-60 mt-10 text-center'>
                    <span className='text-center bg-[var(--color-brand)] p-4 text-2xl rounded-full' 
                    style={{width:'20px'}}><i className="fas fa-book"></i></span>
                    <h1 className='font-bold text-20 py-2 text-center mt-5'>Outdoor space</h1>Font Awesome via CDN
                    <p className='justify-center text-center'> laudantium at lla aperiam, a atque sequi?</p>
                </div>
              
            </div>

        </div>

     </div>

  );
};

export default BenefitSection;
