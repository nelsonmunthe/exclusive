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
        {path: "/detail", element: <ProductDetail />}
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
