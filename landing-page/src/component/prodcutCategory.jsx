import React from 'react';
import { useProduct } from '../contexts/productContext';
import { useTheme } from '../contexts/themeContext';
const ProductByType = () => {
  const { product } = useProduct();
  const {theme} =useTheme();

  // Group products by type
  const groupedByType = product.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 m-6 text-center">Products by Category (Type)</h2>

      {Object.keys(groupedByType).map((type) => (
        <div key={type} className="mb-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-1">{type}</h3>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {groupedByType[type].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg shadow hover:shadow-lg transition duration-300 $${theme==='light'?'bg-white':'bg-gray-800'}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.status}</p>
                  <p className="text-xs text-gray-400 mt-1">Date: {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductByType;
