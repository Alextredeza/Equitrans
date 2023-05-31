import React from 'react'

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'

import Navbar from '../components/layout/Navbar'
import Slider from '../components/Slider'

function App() {

  let imagenes = [
    "https://th.bing.com/th/id/R.54238fdce38b8804ca9d9988658d85d5?rik=w99%2fFQKPhBcXHg&pid=ImgRaw&r=0",
    "https://wallpaperaccess.com/full/6319354.jpg",
    "https://wallpaperaccess.com/full/6319353.jpg",
    "https://wallpaperaccess.com/full/6319364.jpg",
    "https://wallpaperaccess.com/full/6319356.jpg",
    "https://wallpaperaccess.com/full/6319357.jpg",
    "/img/Aleron_honda_civik_2006.jpg",
  ]

  let bg = 'https://wallpaperaccess.com/full/6319357.jpg'

  let redes = [
    {
      icon: <AiFillInstagram className='text-2xl' />,
      link: 'https://www.instagram.com/alejandro_ortiz_2001/'
    },
    {
      icon: <AiFillFacebook className='text-2xl' />,
      link: 'https://www.facebook.com/alejandro.ortiz.2001/'
    },
    {
      icon: <SiTiktok className='text-2xl' />,
      link: 'https://www.tiktok.com/@alejandro_ortiz_2001?lang=es'
    }
  ]

  return (
    <div>
      <Navbar />
      <div
        className='h-36 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-900/95 flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className='text-4xl font-bold text-white' >hola</h1>
      </div>
      <div className='container m-auto p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center' >
        <div
          className='h-72 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-900/95 flex flex-col justify-center items-center rounded-md'
          style={{ backgroundImage: `url(${bg})` }}
        >
          <button
            className='text-white font-bold text-2xl px-4 py-2 rounded-md border-2 border-white hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl'
          >
            CONOCENOS
          </button>
        </div>
        <div
          className='h-48 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-900/95 flex flex-col justify-center items-center rounded-md'
        >
          <p>Contactos</p>
          <p>TLF: </p>
          <p>Email</p>
          <div>
            <p>redes sociales</p>
            <div className='flex gap-2'>
              {redes.map((red, i) => {
                return (
                  <a
                    key={i}
                    href={red.link}
                    target='_blank'
                    rel='noreferrer'
                    className='text-white transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl'
                  >
                    {red.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <p
            className='text-2xl font-bold text-center mb-3 bg-gray-300 rounded-md'
          >
            Nuestros camiones
          </p>
          <div className='max-w-5xl m-auto'>
            <Slider>
              {imagenes.map((img, i) => {
                return <img src={img} alt={`imagen ${i}`} className='rounded-md h-full' />
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App