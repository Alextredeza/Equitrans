import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='container m-auto p-3'>
                {children}
            </div>
        </div>
    )
}

export default Layout