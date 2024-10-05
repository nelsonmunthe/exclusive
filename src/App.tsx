import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <RootLayout />,
      errorElement : <div></div>,
      children : [
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
