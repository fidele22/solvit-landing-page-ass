import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Box, List, Layers, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { to: '/', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
    { to: '/users', icon: <Users className="w-5 h-5" />, label: 'Users', count: 116 },
    { to: '/products', icon: <Box className="w-5 h-5" />, label: 'Products', count: 100 },
    { to: '/assignments', icon: <List className="w-5 h-5" />, label: 'Assignments', count: 10 },
    { to: '/categories', icon: <Layers className="w-5 h-5" />, label: 'Categories' },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 p-6">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Box className="text-white w-6 h-6" />
          </div>
          <div>
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
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                    {item.count && (
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
  );
};

export default Sidebar;
