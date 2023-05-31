import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Layout({ children }) {
    return (
        <div className='min-h-screen bg-slate-400 flex flex-col'>
            <Navbar />
            <div className='p-3'>
                <div className='m-auto container'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout