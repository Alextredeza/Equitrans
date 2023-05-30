import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Hourse from './pages/Hourse.jsx';

const Router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/hourse',
    element: <Hourse />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
