import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Login from './pages/login/Index';
import SignUp from './pages/signUp/Index';
import HomePage from './pages/home';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <RootLayout />,
      errorElement : <div></div>,
      children : [
        {path: "/", index: true, element: <HomePage />},
        {path: "/login", element: <Login />},
        {path: "/sign-up", element: <SignUp />}
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
