import { createContext, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


  
  const product = [
    {
      name: "MacBook",
      type: "Laptop",
      status: "In Stock",
      date: "12 Jul, 2024",
      image:"https://sm.pcmag.com/pcmag_me/photo/default/macbook-6_hgfm.jpg",
    },
    {
      name: "HP EliteBook",
      type: "Laptop",
      status: "Assigned",
      date: "15 Jul, 2024",
      image:"https://www.mikkyworld.com/wp-content/uploads/2023/05/g9-e.jpg",
    },
        {
      name: "Iphone",
      type: "Phone",
      status: "Low Stock",
      date: "12 Jul, 2024",
      image:"https://m.media-amazon.com/images/I/516QZcrv+dL.jpg",
    },
    {
      name: "HP EliteBook",
      type: "Laptop",
      status: "Assigned",
      date: "15 Jul, 2024",
      image:"https://laptoplelo.com/wp-content/uploads/2020/02/ad923e531f60b81e4e6bec1c07b8669b.jpg",
    },
        {
      name: "MacBook",
      type: "Laptop",
      status: "In Stock",
      date: "12 Jul, 2024",
      image:"https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/3587946/oo04-09_1316tt.0.png"
    },
    {
      name: "HP EliteBook",
      type: "Laptop",
      status: "Assigned",
      date: "15 Jul, 2024",
      image:"https://cdn.store.link/products/store3449/2yrpni-whatsapp%20image%202024-01-12%20at%207.21.02%20pm.jpeg?versionId=mv0__ewi9ClnaONh0zhdoPcyxbjIGvfS"
    },
  ];

  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
