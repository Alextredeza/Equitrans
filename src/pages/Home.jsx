import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'

import Navbar from '../components/layout/Navbar'
import Slider from '../components/Slider'

function App() {

  let imagenes = [
    // "https://i.imgur.com/Kj1wm6O.jpg",
    "/img/camion2.jpg",
    "/img/camion3.jpg",
    "/img/camion4.jpg",
  ]

  let banner = 'https://www.hospitalveterinariglories.com/wp-content/uploads/2022/11/25-11-22-X-datos-increi%CC%81bles-sobre-los-caballos.jpg'

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
      <div className='h-[calc(100vh_-_250px)] bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-550/95 flex flex-col justify-center items-start px-10' style={{ backgroundImage: `url(${banner})` }} >
        <h1 className='text-4xl font-bold text-white w-1/2' >Transporte y Venta de Caballos a nivel profesional</h1>
        <p className='text-white text-sm mt-3' >
          Transporta o compra caballos de la mejor manera posible
        </p>
      </div>
      <div className='bg-[#24272e]'>
        <div id='about' className='flex flex-wrap gap-2 p-4  lg:block max-w-5xl m-auto'>
          <div className='w-full lg:w-fullmax-w-5xl m-auto'>
            <p className='text-2xl text-[#fe2c2c] font-bold cursor-pointer lg:w-1/2'>Sobre nosotros</p>
            <p className='text-white text-sm mt-3' >
              Contamos con vehículos de transporte especialmente diseñados y equipados para ofrecer comodidad y seguridad óptimas. Nuestras modernas unidades están equipadas con sistemas de ventilación, monitoreo de temperatura y suspensión especializada para garantizar un viaje suave y libre de estrés para sus equinos.
            </p>
            <p className='text-white text-sm mt-3' >
              Nuestro equipo de transportistas altamente capacitados posee una amplia experiencia en el manejo de caballos y está comprometido con la seguridad en cada etapa del viaje. Mantenemos una comunicación constante con nuestros clientes, brindando actualizaciones periódicas sobre el progreso del transporte para brindar tranquilidad y confianza.
              <Link className='text-[#fe2c2c] ml-1' to="about"> LEER MAS</Link>
            </p>
          </div>
          <div className='w-full grid grid-cols-2 gap-2 lg:grid-cols-4 lg:w-full lg:mt-5'>
            <img src="/img/camion4.jpg" alt="" />
            <img src="/img/camion4.jpg" alt="" />
            <img src="/img/camion4.jpg" alt="" />
            <img src="/img/camion4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='bg-[#3a3b40] p-5' id='services' >
        <p className='text-2xl font-bold text-center mb-3 bg-gray-300 rounded-md w-1/2 m-auto' >Nuestro Camión</p>
        <div
          className='flex flex-wrap lg:flex-nowrap flex-row-reverse gap-2 max-w-5xl m-auto'
        >
          <div className='w-full lg:w-1/2'>
            <p className='text-white text-sm mt-3'>
              Nuestro camión de transporte de caballos, un Scania gris con un distintivo logo rojo, está diseñado pensando en la comodidad y seguridad de los caballos. Cuenta con comederos estratégicamente ubicados, ventanas para una adecuada ventilación, y cámaras de seguridad en el compartimento de carga. Además, ofrece amplio espacio de almacenamiento para maletines y baúles. Garantizamos un transporte de primera clase, donde el bienestar de los caballos es nuestra máxima prioridad.
            </p>
            <div className=' hidden lg:grid lg:grid-cols-2 gap-3 lg:mt-5'>
              <img className='w-full' src="/img/camion4.jpg" alt="" />
              <img className='w-full' src="/img/camion4.jpg" alt="" />
            </div>
          </div>
          <div className='w-full lg:w-1/2' >
            <Slider>
              {imagenes.map((img, i) => {
                return <img src={img} alt={`imagen ${i}`} className='rounded-md h-full' />
              })}
            </Slider>
          </div>
        </div>

      </div>
      <div className='bg-[#24272e] p-5' id='contact' >
        <p className='text-2xl font-bold text-center mb-3 bg-gray-300 rounded-md w-1/2 m-auto' >
          Contáctanos
        </p>
        <div className='flex flex-wrap lg:flex-nowrap gap-2 max-w-5xl m-auto' >
          <div className='w-full lg:w-1/2'>
            <br></br>
            <p className='text-white'>Contacta con nosotros para pode rproporcionarte mas información de lo que necesites, presupuestos, servicios extra y demas informaciones que necesites. </p>
            <br></br>
            <div className=''>
              <ul className='text-white text-sm mt-3 list-disc' >
                <li className='ml-5' >
                  <p className='text-white text-sm'>Telefono: 626 309 623</p>
                </li>
                <li className='ml-5'>
                  <p className='text-white text-sm'>Correo: equitrans_andreu@gmail</p>
                </li>
                <li className='ml-5' >
                  <p className='text-white text-sm'>Redes Sociales: @equitrans_andreu</p>
                </li>
              </ul>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {redes.map((red, i) => {
                return (
                  <a key={i} href={red.link} target='_blank' rel='noreferrer' className='text-white transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl'>
                    {red.icon}
                  </a>
                )
              })}
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src="/img/camion4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='bg-[#3a3b40] p-5' id='contact' >
        <p className='text-2xl font-bold text-center mb-3 bg-gray-300 rounded-md w-1/2 m-auto' >
          Esquilado
        </p>
        <div className='flex flex-row-reverse gap-2 max-w-5xl m-auto' >
          <div className='w-full flex flex-col justify-center items-center' >
            <p className='text-white bg-gray-600/60 rounded-lg p-3 w-1/2 '>Contacta con<br></br> nosotros para pode rproporcionarte mas información de lo que necesites, presupuestos, servicios extra y demas informaciones que necesites. </p>
          </div>
          <div className='w-1/2 pl-12'>
            <img className='w-[200px] rounded-md p-1' src="/img/camion4.jpg" alt="" />
            <img className='w-[200px] rounded-md p-1' src="/img/camion4.jpg" alt="" />
          </div>
        </div>
      </div>
      <footer className='bg-slate-500 text-white text-center p-3 mt-auto'>
        <p className='text-sm'>
          &copy; 2021 - {new Date().getFullYear()} | Equitrans_Andreu | <a href='https://www.linkedin.com/in/brandon-lee-2a1a6b1a1/' target='_blank' rel='noreferrer'>Brandon Lee</a>
        </p>
      </footer>
    </div>
  )
}

export default App