// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Business from './components/businessManagement-K/Bmanagment';
import Nav from './components/nav/Nav';
;
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'aboutme',
        element: <Business />,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
