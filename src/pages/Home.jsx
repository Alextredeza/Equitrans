import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'

import Navbar from '../components/layout/Navbar'
import Slider from '../components/Slider'

function App() {

  let imagenes = [
    "/img/camion1.png",
    "/img/camion2.jpg",
    "/img/camion3.jpg",
    "/img/camion4.jpg",
  ]

  let banner = 'https://www.hospitalveterinariglories.com/wp-content/uploads/2022/11/25-11-22-X-datos-increi%CC%81bles-sobre-los-caballos.jpg'

  let imgconocenos = '/img/camion4.jpg'

  let redes = [
    {
      icon: <AiFillInstagram className='text-2xl' />,
      link: 'https://www.instagram.com/equitrans_andreu/'
    },
    {
      icon: <AiFillFacebook className='text-2xl' />,
      link: 'https://www.facebook.com/alejandro.ortiz.2001/'
    },
    {
      icon: <SiTiktok className='text-2xl' />,
      link: 'https://www.tiktok.com/@equitransandreu'
    }
  ]

  return (
    <div>
      <Navbar />
      <div
        className='h-[calc(100vh_-_250px)] bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-550/95 flex flex-col justify-center items-start px-10'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className='text-4xl font-bold text-white w-1/2' >Transporte y Venta de Caballos a nivel profesional</h1>
        <p
          className='text-white text-sm mt-3'
        >
          Transporta o compra caballos de la mejor manera posible
        </p>
      </div>
      <div
        id='about'
        className='flex gap-2 p-4 bg-[#24272e]'>
        <div className='w-1/2'>
          <p
            className='text-2xl text-[#fe2c2c] font-bold cursor-pointer'
          >Sobre nosotros</p>
          <p
            className='text-white text-sm mt-3'
          >
            Contamos con vehículos de transporte especialmente diseñados y equipados para ofrecer comodidad y seguridad óptimas. Nuestras modernas unidades están equipadas con sistemas de ventilación, monitoreo de temperatura y suspensión especializada para garantizar un viaje suave y libre de estrés para sus equinos.
          </p>
          <p
            className='text-white text-sm mt-3'
          >
            Nuestro equipo de transportistas altamente capacitados posee una amplia experiencia en el manejo de caballos y está comprometido con la seguridad en cada etapa del viaje. Mantenemos una comunicación constante con nuestros clientes, brindando actualizaciones periódicas sobre el progreso del transporte para brindar tranquilidad y confianza.
            <Link className='text-[#fe2c2c] ml-1' to="about"> LEER MAS</Link>
          </p>
        </div>
        <div
          className='w-1/2'
        >
          <img src="/img/camion4.jpg" alt="" />
        </div>
      </div>
      <div
        className='bg-[#24272e] p-5'
        id='services'
      >
        <p
          className='text-2xl font-bold text-center mb-3 bg-gray-300 rounded-md w-1/2 m-auto'
        >Nuestros camiones</p>
        <div
          className='flex flex-row-reverse gap-2'
        >
          <div className='w-1/2'>
            
            <p
              className='text-white text-sm mt-3'
            >
              Contamos con vehículos de transporte especialmente diseñados y equipados para ofrecer comodidad y seguridad óptimas. Nuestras modernas unidades están equipadas con sistemas de ventilación, monitoreo de temperatura y suspensión especializada para garantizar un viaje suave y libre de estrés para sus equinos.
            </p>
            <p
              className='text-white text-sm mt-3'
            >
              Nuestro equipo de transportistas altamente capacitados posee una amplia experiencia en el manejo de caballos y está comprometido con la seguridad en cada etapa del viaje. Mantenemos una comunicación constante con nuestros clientes, brindando actualizaciones periódicas sobre el progreso del transporte para brindar tranquilidad y confianza.
              <Link className='text-[#fe2c2c] ml-1' to="about"> LEER MAS</Link>
            </p>
          </div>
          <div
            className='w-1/2'
          >
            <Slider>
              {imagenes.map((img, i) => {
                return <img src={img} alt={`imagen ${i}`} className='rounded-md h-full' />
              })}
            </Slider>
          </div>
        </div>

      </div>
      <div
        className='bg-[#24272e] p-5'
        id='contact'
      >
        <p
          className='text-2xl font-bold text-center mb-3 bg-gray-300 rounded-md w-1/2 m-auto'
        >
          Contactanos
        </p>
        <div
          className='flex gap-2 max-w-5xl m-auto'
        >
          <div
            className='w-1/2'
          >
            <div className=''>
              <ul
                className='text-white text-sm mt-3 list-disc'
              >
                <li
                  className='ml-5'
                >
                  <p className='text-white text-sm'>Telefono: 55 1234 5678</p>
                </li>
                <li
                  className='ml-5'
                >
                  <p className='text-white text-sm'>Correo: </p>
                </li>
              </ul>
            </div>
            <div className='flex gap-2 mt-2'>
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
          <div
            className='w-1/2'
          >
            <img src="/img/camion4.jpg" alt="" />
          </div>
        </div>
      </div>
      <footer className='bg-slate-500 text-white text-center p-3 mt-auto'>
        <p className='text-sm'>
          &copy; 2021 - {new Date().getFullYear()} | All Rights Reserved | <a href='https://www.linkedin.com/in/brandon-lee-2a1a6b1a1/' target='_blank' rel='noreferrer'>Brandon Lee</a>
        </p>
      </footer>
    </div>
  )

  return (
    <div>
      <Navbar />
      <div
        className='h-40 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-550/95 flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className='text-4xl font-bold text-white' >Transporte y Venta de Caballos a nievel profesional</h1>
      </div>
      <div className='container m-auto p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center' >
        <div
          className='h-72 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-700/95 flex flex-col justify-center items-center rounded-md'
          style={{ backgroundImage: `url(${imgconocenos})` }}
        >
          <button
            className='text-white font-bold text-2xl px-4 py-2 rounded-md border-2 border-white hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl'
          >
            CONOCENOS
          </button>
        </div>
        <div
          className='h-48 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-600/95 flex flex-col justify-center items-center rounded-md text-white font-bold'
        >
          <p className='text-2xl'>Contactanos</p>
          <p className='p-2'>TLF:  626309623 </p>
          <p>Email:  Equitrans_Andreu@gmail.com</p>
          <div>
            <p className='p-2'>Redes sociales:</p>
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
            Nuestro Camión
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