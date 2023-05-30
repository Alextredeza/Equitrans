import React from 'react'
import { Link } from 'react-router-dom'


function Layout({ children }) {
    return (
        <div>
            <nav className='bg-slate-300 p-3'>
                <ul className='flex gap-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>Nosotros</Link>
                    </li>
                    <li>
                        <Link to='/hourse'>Caballos</Link>
                    </li>
                </ul>
            </nav>
            <div className='container m-auto p-3'>
                {children}
            </div>
        </div>
    )
}

export default Layout