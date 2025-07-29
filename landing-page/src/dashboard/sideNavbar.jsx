import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Box, List, Layers, LogOut, Menu } from 'lucide-react';
import { useUser } from '../contexts/userContext';
import {useProduct} from '../contexts/productContext'
import { useTheme } from '../contexts/themeContext';

const Sidebar = () => {
  const location = useLocation();
  const {theme} =useTheme();
  const { user } = useUser();
   const {product} = useProduct();
  const [isOpen, setIsOpen] = useState(false);

  const totalUsers = user.length;
  const totalProducts = product.length;
  const assignedProducts = product.filter((product) => product.status.toLowerCase() === 'assigned').length;

  const menuItems = [
    { to: '/', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
    { to: '/userpage', icon: <Users className="w-5 h-5" />, label: 'Users', count: totalUsers },
    { to: '/products', icon: <Box className="w-5 h-5" />, label: 'Products', count: totalProducts },
    { to: '/assignments', icon: <List className="w-5 h-5" />, label: 'Assignments', count: assignedProducts },
    { to: '/categories', icon: <Layers className="w-5 h-5" />, label: 'Categories' },
  ];

  return (
    <>
      {/* Toggle Button (visible only on mobile) */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50  p-2 rounded-md shadow ${theme==='light? bg-amber-50: bgtext-gray-900'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-60  shadow-md flex flex-col justify-between z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static ${theme==='light' ?'bg-white':'bg-gray-800'}`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 p-6 ml-10 lg:ml-0">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Box className="text-white w-6 h-6" />
            </div>
            <div className=''>
              <h1 className="text-lg font-semibold">iHUZA</h1>
              <p className="text-xs text-gray-500">INVENTORY</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="mt-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className={`flex items-center gap-3 px-6 py-2 rounded-l-full font-medium ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-500 hover:bg-gray-100'
                      }
                      `}
                    >
                      {item.icon}
                      {item.label}
                      {item.count !== undefined && (
                        <span className="ml-auto bg-gray-100 text-xs text-gray-500 px-2 py-0.5 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-6">
          <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition font-medium cursor-pointer">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


