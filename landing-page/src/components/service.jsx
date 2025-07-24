import React, { useState } from 'react';
import officeImg from '../assets/office.avif';
import coffeeImg from '../assets/coffee.jpg';
import gardenImg from '../assets/garden.jpg';
import meetingImg from '../assets/meeting.jpg'; // Add more images
import loungeImg from '../assets/lourage.jpg';

const ServiceData = [
  {
    title: 'Renting Offices',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
    image: officeImg,
  },
  {
    title: 'Coffee Shop',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
    image: coffeeImg,
  },
  {
    title: 'Private Event Space',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
    image: gardenImg,
  },
  {
    title: 'Meeting Rooms',
    description: 'Fully equipped rooms for productive meetings',
    image: meetingImg,
  },
  {
    title: 'Lounge Area',
    description: 'Relax or collaborate in our stylish lounges',
    image: loungeImg,
  },
];

const Service = () => {
  const itemsPerPage = 3;
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = Math.ceil(ServiceData.length / itemsPerPage);
  const currentPageData = ServiceData.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
        We Offer Creative Working Environments
      </h2>
      <p className="text-gray-600 mb-12">
        Find your perfect workspace. Choose from versatile options tailored to your needs.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentPageData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-sm overflow-hidden border border-gray-100"
          >
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-[var(--color-brand)] text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a href="#" className="text-[var(--color-brand)] font-semibold hover:underline">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

    
      <div className="mt-10 flex justify-center space-x-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="pagination"
              value={idx}
              checked={pageIndex === idx}
              onChange={() => setPageIndex(idx)}
              className="mr-2"
            />
          </label>
        ))}
      </div>
    </section>
  );
};

export default Service;
