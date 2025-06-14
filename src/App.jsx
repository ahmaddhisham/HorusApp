import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './authentication/SignIn';
import Cart from './pages/Cart';
import { productsData } from './api/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationPage from './authentication/RegistirationPage';
import Contact from './pages/Contacts';
import About from './pages/About';

const Layout = () => {
  return (
    <>
      <Header />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData} />
        <Route path="/contacts" element={<Contact/>} />
       <Route path="/about" element={<About />} />
       <Route path="/home" element={<Home />} />

       
        <Route path="cart" element={<Cart />} />
       
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<RegistrationPage />} />
      
      


    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;