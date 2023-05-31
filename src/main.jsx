import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Hourse from './pages/Hourse.jsx';
import Social from './pages/Social';

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
  },
  {
    path: '/social',
    element: <Social />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
