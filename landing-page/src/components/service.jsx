import React from 'react';
import officeImg from '../assets/office.avif';
import coffeeImg from '../assets/coffee.jpg';
import gardenImg from '../assets/garden.jpg';

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
    title: 'Private event Space',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
    image: gardenImg,
  },
];

const Service = () => {

  return (
    <section className="py-20 px-4 text-center">
     
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
        We Offer creative working environments
      </h2>
      <p className="text-gray-600 mb-12">
        Find your perfect workspace. Choose from versatile options tailored to your needs.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ServiceData.map((item, index) => (
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

    
      <div className="mt-10 flex justify-center space-x-2">
        <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default Service;
