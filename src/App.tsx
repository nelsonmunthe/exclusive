import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Login from './pages/login/Index';
import SignUp from './pages/signUp/Index';
import HomePage from './pages/home';
import About from './pages/about/Index';
import Contact from './pages/contact/Index';
import ErrorPage from './pages/Error';
import Cart from './pages/cart/Cart';
import ProductDetail from './pages/productDetail/Index';
import Billing from './pages/billing/Billing';
import Account from './pages/account/Index';
import Profile from './pages/account/Profile';
import AddressBook from './pages/account/AddressBook';
import PaymentOption from './pages/account/PaymentOption';
import Return from './pages/account/Return';
import Cancellation from './pages/account/Cancelation';
import Product from './pages/product/Product';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <RootLayout />,
      errorElement : <ErrorPage />,
      children : [
        {path: "/", index: true, element: <HomePage />},
        {path: "/login", element: <Login />},
        {path: "/sign-up", element: <SignUp />},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />},
        {path: "/cart", element: <Cart />},
        {path: "/detail/:productId", element: <ProductDetail />},
        {path: "/billing", element: <Billing />},
        {path: "/product", element: <Product />},
        {
          path: "/account",
          element: <Account />, 
          children: [
            {path: "/account/profile", element: <Profile />, index: true},
            {path: "/account/address", element: <AddressBook />},
            {path: "/account/payment", element: <PaymentOption />},
            {path: "/account/return", element: <Return />},
            {path: "/account/cancellation", element: <Cancellation />}
          ]
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
