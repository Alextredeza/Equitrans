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

            <h1 className='text-3xl font-bold font-extrabold text-red-600 leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent '>Equitrans</h1>

            <ul className='flex gap-4'>
                <li>
                    <a href='#about' >Nosotros</a>
                </li>
                <li>
                    <a href='#contact'>Contactanos</a>
                </li>
                <li>
                    <a href='#services'>Camión</a>
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