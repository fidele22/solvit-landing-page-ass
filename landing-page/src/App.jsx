import React from 'react';
import TopNavbar from './dashboard/topNavbar'

import { UserProvider } from './contexts/userContext';
import { ThemeProvider } from './contexts/themeContext';
import { ProductProvider } from './contexts/productContext'
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
import UserOverview from './dashboard/userPage';
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
      <ThemeProvider>
        <ProductProvider>
       <UserProvider>
      <div className="flex h-screen overflow-hidden">
  {/* Sidebar stays fixed */}
  <SideNavBar />

  {/* Main content area */}
  <div className="flex-1 overflow-y-auto">
    <TopNavbar />
    <div className="lg:p-6">
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/userpage" element={<UserOverview />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  </div>
</div>

    </UserProvider>
    </ProductProvider>
    </ThemeProvider>

    </div>
  );
}


export default App;
