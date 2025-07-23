import React, { useState } from 'react';
import { FaThLarge } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logoIcon from '../assets/mai_icon_2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-6 md:px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoIcon} alt="Logo" className="w-10 h-10" />
        <div className="font-bold text-xl">
          <span>Business</span>
          <span className="text-brand ml-1">Cafe</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 font-medium">
        <li>
          <a href="#home" className="text-brand font-semibold hover:text-brand cursor-pointer">Home</a>
        </li>
        <li>
          <a href="#service" className="text-black hover:text-brand cursor-pointer">Space</a>
        </li>
        <li>
          <a href="#about" className="text-black hover:text-brand cursor-pointer">About</a>
        </li>
        <li>
          <a href="#contact" className="text-black hover:text-brand cursor-pointer">Contact</a>
        </li>
      </ul>

     
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none text-brand">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden font-medium">
          <li>
            <a href="#home" onClick={toggleMenu} className="text-brand font-semibold hover:text-brand">Home</a>
          </li>
          <li>
            <a href="#service" onClick={toggleMenu} className="text-black hover:text-brand">Space</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="text-black hover:text-brand">About</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="text-black hover:text-brand">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
