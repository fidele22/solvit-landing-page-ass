import React from 'react';
import { useUser } from '../contexts/userContext';
import { useTheme } from '../contexts/themeContext';

function users() {
    const { users } = useUser();
     const {theme} =useTheme();
  return (
    <div>
    
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
            {users.map((user, index) => (
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
  )
}

export default users
