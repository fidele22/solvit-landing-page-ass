// ProductCardList.jsx
import React from 'react';
import { useProduct } from '../contexts/productContext';
import { useTheme } from '../contexts/themeContext';

const ProductCardList = () => {
  const { product } = useProduct();
  const {theme} =useTheme()

  return (
    <div className="">
         <h2 className='text-center font-bold text-2xl text-gray-500'>Product stock</h2>
         <hr />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
     
      {product.map((item, index) => (
        <div
          key={index}
          className={`shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 ${theme==='light' ?'bg-white':'bg-gray-800'}`}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-500">{item.type}</p>
            <p
              className={`text-sm font-semibold ${
                item.status === 'In Stock'
                  ? 'text-green-600'
                  : item.status === 'Assigned'
                  ? 'text-blue-600'
                  : 'text-yellow-600'
              }`}
            >
              {item.status}
            </p>
            <p className="text-sm text-gray-400 mt-1">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductCardList;
