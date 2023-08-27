
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Business from './components/businessManagement-K/Bmanagment';
import Nav from './components/nav/Nav';
import Signup from './components/signup-KT/Signup';
import Login from './components/login-A/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'business',
        element: <Business />,
      },
      {
        path: 'signup',
        element: <Signup />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
