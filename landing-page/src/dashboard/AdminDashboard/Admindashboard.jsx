import { Outlet } from 'react-router-dom';
import TopNavbar from '../topNavbar';
import SideNavBar from '../sideNavbar';

function Admindashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar and Navbar stay visible */}
      <TopNavbar />
      <SideNavBar />

      {/* Main content changes here based on route */}
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Admindashboard;
