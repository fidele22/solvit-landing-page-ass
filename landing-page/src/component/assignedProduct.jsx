import React from 'react';
import { useProduct } from '../contexts/productContext';

const AssignedProducts = () => {
  const { product } = useProduct();


  const assignedProducts = product.filter(
    (product) => product.status.toLowerCase() === 'assigned'
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 m-10 text-center">
        Assigned Products
      </h2>

      {assignedProducts.length === 0 ? (
        <p className="text-center text-gray-600">No assigned products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assignedProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md border-1 border-gray-200 p-5 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.type}</p>
                <p className="text-sm text-green-600 font-medium mt-1">{item.status}</p>
                <p className="text-xs text-gray-400 mt-2">Assigned on {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedProducts;
