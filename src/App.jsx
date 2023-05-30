import React from 'react'
import Home from './pages/Home'

import { createHashRouter } from 'react-router-dom';

const Router = createHashRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const App = () => {
  return (
    <div>

    </div>
  )
}

export default App