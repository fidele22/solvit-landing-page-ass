import { Moon, Settings, Bell, User } from 'lucide-react'; 
import { useUser } from './userContext';
const Sidebar = () => {
     const { name, email } = useUser();
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      {/* Left side */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, {name}</p>
      </div>

      
      {/* <div className="flex items-center gap-6"> */}
        <Moon className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span>{email}</span>
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
        </div>

    </div>
  );
};

export default Sidebar;
