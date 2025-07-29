import { Moon, Sun, Settings, Bell, User } from 'lucide-react';
import { useTheme } from '../contexts/themeContext';
import { useUser  } from '../contexts/userContext';
import '../index.css'

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser (); 
  const admin = user.find((user) => user.role.toLowerCase() === 'admin');

  return (
    <div className={`flex lg:w-283 items-center md:w-150 md:justify-between lg:justify-between px-6 py-4 shadow-md fixed z-10 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <div className="ml-10 lg:0">
        <h1 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Dashboard</h1>
        <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>Welcome back, {admin?.name || 'Admin'}</p>
      </div>
     
      <div className="flex items-center lg:gap-6">
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-300 hover:text-yellow-400 cursor-pointer" />
          )}
        </button>
        <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{admin?.email || 'admin@ihuza.com'}</span>
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <User  className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
