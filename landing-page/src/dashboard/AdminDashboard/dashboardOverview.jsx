
import { Users, Box, CheckCircle, AlertTriangle, Loader } from 'lucide-react';
import { useUser } from '../../contexts/userContext';
import {useProduct} from '../../contexts/productContext'
import { useTheme } from '../../contexts/themeContext';
import UserTable from '../../component/users';

const DashboardOverview = () => {
  const { users } = useUser();
  const {product} = useProduct();
  const {theme} =useTheme();
  const totalUsers = users.length;
  const totalProducts = product.length;
  const assignedProducts = product.filter((p) => p.status.toLowerCase() === 'assigned').length;
  const unassignedProducts = product.filter((p) => p.status.toLowerCase() !== 'assigned').length;

  const stats = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, label: 'Total Users', value: totalUsers },
    { icon: <Box className="w-5 h-5 text-blue-600" />, label: 'Total Products', value: totalProducts },
    { icon: <CheckCircle className="w-5 h-5 text-green-600" />, label: 'Assigned Products', value: assignedProducts },
    { icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />, label: 'Unassigned Products', value: unassignedProducts },
  ];

  return (
    <div className="p-4 md:p-1 space-y-6 w-full mt-20 ml-0 md:ml-0 transition-all duration-300">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-6 shadow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Box className="w-8 h-8" />
          <div>
            <h2 className="text-lg font-bold">iHUZA INVENTORY - System Overview</h2>
            <p className="text-sm opacity-90">Monitor your iHUZA inventory and product assignments in real-time.</p>
            <div className="flex items-center mt-2 text-sm text-white/90">
              <CheckCircle className="w-4 h-4 mr-2 text-white-600" />
              All Systems Operational
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div key={index} className={`rounded-xl border-1 shadow p-4 flex items-center gap-4 ${theme==='light' ?'bg-white border-gray-200':'bg-gray-800 border-gray-600'}`}>
            <div className="bg-gray-100 p-2 rounded-lg">{item.icon}</div>
            <div>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recently Added Products */}
      <div className={`mt-6 w-full shadow p-4 rounded ${theme==='light' ?'bg-white':'bg-gray-800'}`}>
        <h2 className="text-lg font-semibold mb-6">Recently Added Products</h2>
        <hr className={`${theme==='light'? 'text-white':'text-gray-600'}`}/>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {product.slice(0, 5).map((product, index) => (
            <div key={index} className={`shadow rounded-lg border-1  p-4 ${theme==='light' ?'bg-white border-gray-200':'bg-gray-800 border-gray-700'}`}>
              <div className="flex justify-between items-center">
                <h3 className="text-md font-bold">{product.name}</h3>
                <p className={`text-sm p-1 px-2 rounded-full
                  ${product.status.toLowerCase() === 'in stock' && theme==='light'
                    ? 'bg-green-200'
                    :product.status.toLowerCase() === 'in stock' && theme==='dark'
                    ? 'bg-green-200 text-gray-600'
                    :product.status.toLowerCase() === 'assigned' && theme==='light'
                    ? 'bg-blue-100'
                    :product.status.toLowerCase() === 'assigned' && theme==='dark'
                    ? 'bg-blue-300 text-gray-600'
                    : product.status.toLowerCase() === 'low stock' ? 'bg-amber-400' : 'bg-amber-50'}`}>
                  {product.status}
                </p>
              </div>
              <p className="text-sm text-gray-600">{product.type}</p>
              <p className="text-sm text-gray-500 mt-1">{product.date}</p>
            </div>
          ))}
        </div>
      </div>
          {/* user table  */}
      <UserTable />
     
  
  
   
    </div>
  );
};

export default DashboardOverview;
