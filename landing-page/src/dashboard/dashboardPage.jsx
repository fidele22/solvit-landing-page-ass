import { Users, Box, CheckCircle, AlertTriangle, Loader } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      label: 'Total Users',
      value: 116,
    },
    {
      icon: <Box className="w-5 h-5 text-blue-600" />,
      label: 'Total Products',
      value: 100,
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      label: 'Assigned Products',
      value: 10,
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      label: 'Unassigned Products',
      value: 90,
    },
  ];

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-6 shadow">
        <div className="flex items-start gap-4">
          <Box className="w-8 h-8" />
          <div>
            <h2 className="text-lg font-bold">iHUZA INVENTORY - System Overview</h2>
            <p className="text-sm opacity-90">
              Monitor your iHUZA inventory and product assignments in real-time.
            </p>
            <div className="flex items-center mt-2 text-sm text-white/90">
              <Loader className="w-4 h-4 mr-2 animate-spin" />
              All Systems Operational
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 flex items-center gap-4 border"
          >
            <div className="bg-gray-100 p-2 rounded-lg">
              {item.icon}
            </div>
            <div>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
