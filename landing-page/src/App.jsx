// App.js
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/userContext';
import { ThemeProvider } from './contexts/themeContext';
import { ProductProvider } from './contexts/productContext';
import { UserLogInProvider } from './contexts/loggedInContext';

import LoginPage from './dashboard/loginPage';
import Admindashboard from './dashboard/AdminDashboard/Admindashboard';
import DashboardOverview from './dashboard/AdminDashboard/dashboardOverview';
import UserPage from './dashboard/AdminDashboard/userPage';
import ProductPage from './dashboard/AdminDashboard/productPage';
import AssignedProducts from './dashboard/AdminDashboard/assignedPage';
import CategorizedProduct from './dashboard/AdminDashboard/categoryPage';

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <UserLogInProvider>
          <UserProvider>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Admindashboard />}>
                <Route index element={<DashboardOverview />} />
                <Route path="userpage" element={<UserPage />} />
                <Route path="productpage" element={<ProductPage />} />
                <Route path='assignments' element ={<AssignedProducts />} />
                <Route path='categories' element ={<CategorizedProduct />} />
              </Route>
            </Routes>
          </UserProvider>
        </UserLogInProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
