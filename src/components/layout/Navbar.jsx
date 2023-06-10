import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const scroll = (id) => {
        let element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth' })
    }
    const [show, setShow] = React.useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <nav className='p-5 bg-white shodow md:flex md:items-center md:justify-between'>
            <div>
                <div className='flex gap-2 items-center' >
                    <Link
                        to='/'
                    >
                        <img
                            src="/img/logo1.jpg"
                            alt="logo"
                            className='w-12'
                        />
                    </Link>
                    <h1 className='text-3xl font-bold text-red-600 leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent '>Equitrans</h1>
                </div>
                <GiHamburgerMenu
                    onClick={handleClick}
                    className='md:hidden block' />
            </div>
            <ul
                className={'absolute bg-white/90 w-full left-0 py-1 pl-7 transition-all ease-in duration-500 md:flex md:static md:py-0 md:pl-0 md:w-auto' + (show ? ' top-[55px]' : ' top-[-400px]')}
            >
                <li className='mx-4 my-4 md:my-0' >
                    <a onClick={() => scroll('about')} class="text-xl hover:text-cyan-500 duration-500" >Nosotros</a>
                </li>
                <li className='mx-4 my-4 md:my-0' >
                    <a class="text-xl hover:text-cyan-500 duration-500" >Nosotros</a>
                </li>
                <li className='mx-4 my-4 md:my-0' >
                    <a class="text-xl hover:text-cyan-500 duration-500" >Nosotros</a>
                </li>
                <li className='mx-4 my-4 md:my-0' >
                    <a class="text-xl hover:text-cyan-500 duration-500" >Nosotros</a>
                </li>
                <li className='mx-4 my-4 md:my-0' >
                    <a class="text-xl hover:text-cyan-500 duration-500" >Nosotros</a>
                </li>
            </ul>
        </nav>
    )

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

            <ul className='flex flex-wrap gap-6'>
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