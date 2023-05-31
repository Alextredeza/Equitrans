import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='bg-slate-300 p-3 flex justify-between'>
            <div>
                <img 
                src="" 
                alt="logo"
                className='w-20'
                />
            </div>
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
                <li>
                    <Link to='/social'>Redes sociales</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar