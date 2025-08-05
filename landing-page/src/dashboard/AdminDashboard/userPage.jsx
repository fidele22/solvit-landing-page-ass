
import UserComponent from '../../component/users';

const DashboardOverview = () => {

  return (
    <div className="p-4 md:p-1 space-y-6 w-full mt-20 ml-0 md:ml-0 transition-all duration-300">
      <h2 className='text-center font-bold text-2xl text-gray-500'>User managment</h2>
    <UserComponent />

    </div>
  );
};

export default DashboardOverview;
