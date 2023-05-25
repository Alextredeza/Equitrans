import React from 'react'
import Layout from './components/layout/Layout'
import Slider from './components/Slider'

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

  return (
    <Layout>
      <h1 className='text-4xl text-center mt-5'>Nombre de la empresa</h1>
      <h2
        className='text-sm text-center text-gray-500 mb-5'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut nobis magnam adipisci ratione odio?
      </h2>
      <div className='max-w-5xl m-auto'>
        <Slider>
          {imagenes.map((img, i) => {
            return <img src={img} alt={`imagen ${i}`} className='rounded-md h-full' />
          })}
        </Slider>
      </div>
      
    </Layout>
  )
}

export default App