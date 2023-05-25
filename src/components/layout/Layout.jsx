import React from 'react'


function Layout({ children }) {
    return (
        <div>
            <nav className='bg-slate-300 p-3'>
                <ul className='flex gap-4'>
                    <li>HOla</li>
                    <li>Adios</li>
                    <li>Caballo</li>
                    <li>Potro</li>
                    <li>Vaca</li>
                </ul>
            </nav>
            <div className='container m-auto p-3'>
                {children}
            </div>
        </div>
    )
}

export default Layout