import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='bg-slate-300 p-3 flex justify-between items-center '>
            <Link
            to='/'
            >
                <img 
                src="/img/logo1.jpg" 
                alt="logo"
                className='w-20'
                />
            </Link>
            <ul className='flex gap-4'>
                <li>
                    <a href='#about' >Nosotros</a>
                </li>
                <li>
                    <a href='#services'>camiones</a>
                </li>
                <li>
                    <a href='#contact'>Contacto</a>
                </li>
                <li>
                    <Link to='/hourse'>Caballos a la venta</Link>
                </li>
                <li>
                    <a href='#esquilado'>Esquilado</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar