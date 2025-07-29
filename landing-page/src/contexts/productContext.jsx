import { createContext, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


  
  const product = [
    {
      name: "MacBook",
      type: "Laptop",
      status: "In Stock",
      date: "12 Jul, 2024"
    },
    {
      name: "HP EliteBook",
      type: "Laptop",
      status: "Assigned",
      date: "15 Jul, 2024"
    },
        {
      name: "Iphone",
      type: "Phone",
      status: "Low Stock",
      date: "12 Jul, 2024"
    },
    {
      name: "HP EliteBook",
      type: "Laptop",
      status: "Assigned",
      date: "15 Jul, 2024"
    },
        {
      name: "MacBook",
      type: "Laptop",
      status: "In Stock",
      date: "12 Jul, 2024"
    },
    {
      name: "HP EliteBook",
      type: "Laptop",
      status: "Assigned",
      date: "15 Jul, 2024"
    },
  ];

  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
