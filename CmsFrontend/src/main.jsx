
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Business from './components/businessManagement-K/Bmanagment';
import Nav from './components/nav/Nav';
import Signup from './components/signup-KT/Signup';
import Login from './components/login-A/Login';
import Post from './components/HomePage/Posts';
import Post1 from './components/HomePage/post1';
import Post2 from './components/HomePage/post2';
import Post3 from './components/HomePage/post3';
import Post4 from './components/HomePage/post4';
import Post5 from './components/HomePage/post5';
import Post6 from './components/HomePage/post6';

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
      
      }, 
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'post',
        element: <Post />,
      },
      {
        path: 'post1',
        element: <Post1 />,
      },
      {
        path: 'post2',
        element: <Post2 />,
      },
      {
        path: 'post3',
        element: <Post3 />,
      },
      {
        path: 'post4',
        element: <Post4 />,
      },
      {
        path: 'post5',
        element: <Post5 />,
      },
      {
        path: 'post6',
        element: <Post6 />,
      }


    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
