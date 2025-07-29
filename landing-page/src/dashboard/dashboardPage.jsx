
import { Users, Box, CheckCircle, AlertTriangle, Loader } from 'lucide-react';
import { useUser } from '../contexts/userContext';
import {useProduct} from '../contexts/productContext'
import { useTheme } from '../contexts/themeContext';
const DashboardOverview = () => {
  const { user } = useUser();
  const {product} = useProduct();
  const {theme} =useTheme();
  const totalUsers = user.length;
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

      {/* Users Table */}
      <div className={`mt-6 w-full shadow rounded overflow-x-auto ${theme==='light' ?'bg-white':'bg-gray-800'}`}>
        <div className="flex justify-between p-4">
          <h2 className="text-lg font-semibold">Users</h2>
          <button className="bg-blue-500 px-3 py-1 rounded text-white text-sm">Add User</button>
        </div>

        <table className={`min-w-full divide-y ${theme==='light' ? 'divide-gray-200' : 'divide-gray-600'} `}>
          <thead className={`${theme==='light' ?'bg-white':'bg-gray-700'}`}>
            <tr>
              <th className={`px-6 py-3 text-left text-sm font-semibold ${theme==='light' ?'text-gray-700':'text-amber-50'}`}>User</th>
              <th className={`px-6 py-3 text-left text-sm font-semibold ${theme==='light' ?'text-gray-700':'text-amber-50'}`}>Role</th>
              <th className={`px-6 py-3 text-left text-sm font-semibold ${theme==='light' ?'text-gray-700':'text-amber-50'}`}>Status</th>
              <th className={`px-6 py-3 text-left text-sm font-semibold ${theme==='light' ?'text-gray-700':'text-amber-50'}`}>Last Login</th>
              <th className={`px-6 py-3 text-left text-sm font-semibold ${theme==='light' ?'text-gray-700':'text-amber-50'}`}>Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${theme==='light' ? 'divide-gray-200' : 'divide-gray-600'} ${theme==='light' ?'bg-white':'bg-gray-800'}`}>
            {user.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className={`font-medium ${theme==='light' ?'text-gray-700':'text-amber-50'}`}>{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </td>
               <td className="px-6 py-4">
                 <span
                   className={`px-2 py-1 text-xs font-semibold rounded-full ${
                     user.role === 'Admin' && theme === 'light'
                       ? 'bg-purple-100 text-purple-700'
                       : user.role === 'Admin' && theme === 'dark'
                       ? 'bg-purple-600 text-purple-100'
                       : user.role === 'Manager' && theme === 'light'
                       ? 'bg-blue-100 text-blue-700'
                       : user.role === 'Manager' && theme === 'dark'
                       ? 'bg-blue-600 text-blue-100'
                       : 'bg-gray-500 text-gray-300'
                   }`}
                 >
                   {user.role}
                 </span>
               </td>

                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'Active' && theme === 'light'
                       ? 'bg-green-200 text-green-500'
                       : user.status === 'Active' && theme === 'dark'
                       ? 'bg-green-500 text-green-200'
                       : user.status === 'Inactive' && theme === 'dark'
                       ? 'bg-red-500 text-red-200'
                       : 'bg-gray-500 text-gray-300'
                   }`}
                 >
                   {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{user.lastLogin}</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-500 font-bold text-sm">Edit</button>
                  <button className="text-red-500 font-bold text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardOverview;
