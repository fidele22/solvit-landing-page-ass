import React from 'react';

const AboutSection = () => {
  return (
     <div className="px-5 gap-10 grid grid-cols-1 md:grid-cols-2 lg:px-25 ">

        <div className=''>
            <h2 className='text-[var(--color-brand)] py-3 font-bold'>About us</h2>
            <h1 className='font-bold text-2xl'>Lorem ipsum dolor sit aspernatur nobis magnam earum est beatae mollitia exercitationem libero dolorem temporibus sint?</h1>
        </div>
        
         <div>
            <p className='mt-9 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquam inventore nulla eos delectus ipsam, quod ipsa magni aut tempora pariatur ut accusantium! Quaerat odio quidem facilis provident eius repellendus.</p>
             <a href="" className='text-[var(--color-brand)] '>More about us</a>
         </div>
     </div>

  );
};

export default AboutSection;
