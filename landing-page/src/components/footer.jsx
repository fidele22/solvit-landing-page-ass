import React from 'react';
import logoIcon from '../assets/mai_icon_2.png'
const FooterSection = () => {
  return (
   
        <section className='px-7 lg:px-20'>
           <div className='text-[var(--color-brand)] mb-10 mt-30'>
            <hr />
           </div>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1'>

            <div className='w-auto lg:w-100'>
          
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <img src={logoIcon} alt=""  className='w-10 h-10'/>
              </div>
              <div className="font-bold text-xl">
                <span>Business</span>
                <span className="text-brand ml-1">Cafe</span>
              </div>
            </div>
            
              <ul className='space-x-6 '>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              </ul>
           
            <div>
              <p>Lorem ipsum dolor Natus dicta libero repudiandae ea error! In.</p>
                
            </div>
            </div>
          
            <div className='w-auto lg:ml-10'>
              
             <h2 className='text-black font-bold'>Quick links</h2>
             <hr />
             <ul className='space-y-2 py-1'>
                <li>Home</li>
                <li>Space</li>
                <li>About</li>
                <li>Contact</li>
             </ul>
            </div>
            <div className='w-70 lg:ml-30'>
            <h2 className='text-black font-bold '>Contact Info</h2>
            <hr />
            <p className='py-1'><strong>Location:</strong>Kigali,<span>Rwanda</span></p>
            <p className='py-1'><strong>Email:</strong>businesscafe@gmail.com</p>
            <p className='py-1'><strong>Phone:</strong>+250780698611</p>
            <a href="" className='text-[var(--color-brand)] underline'>View location on google map</a>
            </div>
            </div>
            <div className='text-[var(--color-brand)] mb-1 mt-10'>
            <hr />
           </div>
           <p className='text-center mb-10'>Copyright 2023 business coffee all rights reserved</p>
        </section>

    

  );
};

export default FooterSection;
