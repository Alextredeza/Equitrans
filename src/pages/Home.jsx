import React from 'react'
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

  return (
    <div>
      <Navbar />
      <div
        className='h-36 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-gray-900/95 flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className='text-4xl font-bold text-white' >hola</h1>
      </div>
      <div className='container m-auto p-3' >
        <div className='max-w-5xl m-auto'>
          <Slider>
            {imagenes.map((img, i) => {
              return <img src={img} alt={`imagen ${i}`} className='rounded-md h-full' />
            })}
          </Slider>
        </div>
        <h2
          className='text-sm text-center text-gray-700 my-5'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut nobis magnam adipisci ratione odio?
        </h2>
      </div>
    </div>
  )
}

export default App