import React from 'react';
import TopNavbar from './dashboard/topNavbar'

import { UserProvider } from './dashboard/userContext';
// landing page imports
import Home from './components/home';
import Service from './components/service';
import AboutUs from './components/about';
import Benefit from './components/benefit';
import Mission from './components/mission';
import Contact from './components/contact';
import Footer from './components/footer';

// dashbord imports 
import SideNavBar from './dashboard/sideNavbar'
import DashboardOverview from './dashboard/dashboardPage';
// import UsersPage from './UsersPage';
// import ProductsPage from './ProductsPage';
// import AssignmentsPage from './AssignmentsPage';
// import CategoriesPage from './CategoriesPage';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <Navbar /> */}

      {/* <section id="home"><Home /></section>
      <section id="service"><Service /></section>
      <section id="about"><AboutUs /></section>
      <section id="benefit"><Benefit /></section>
      <section id="mission"><Mission /></section>
      <section id="contact"><Contact /></section>
      <Footer /> */}

      {/* dashboard page */}
       <UserProvider>
      <div>
           <div className=" bg-gray-50">
          <TopNavbar />
        
        </div>

         <div className="flex bg-gray-50 min-h-screen">
              <SideNavBar />
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          {/* <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/categories" element={<CategoriesPage />} /> */}
        </Routes>
      </div>
      </div>
    </UserProvider>

    </div>
  );
}


export default App;
