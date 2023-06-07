import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const scroll = (id) => {
        let element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth' })
    }

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

            {/* <h1 className='text-3xl font-bold text-red-600 leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent '>Equitrans</h1> */}

            {/* <GiHamburgerMenu className='lg:hidden cursor-pointer text-2xl text-gray-700' /> */}

            <ul className='flex flex-wrap gap-2'>
                <li>
                    <a
                        className='cursor-pointer hover:opacity-50'
                        onClick={() => scroll('about')}
                    >Nosotros</a>
                </li>
                <li>
                    <a
                        className='cursor-pointer hover:opacity-50'
                        onClick={() => scroll('contact')}
                    >Contactanos</a>
                </li>
                <li>
                    <a
                        className='cursor-pointer hover:opacity-50'
                        onClick={() => scroll('services')}
                    >Camión</a>
                </li>

                <li>
                    <Link className='cursor-pointer hover:opacity-50' to='/hourse'>Caballos a la venta</Link>
                </li>
                <li>
                    <a
                        className='cursor-pointer hover:opacity-50'
                        onClick={() => scroll('esquilado')}
                    >Esquilado</a>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar