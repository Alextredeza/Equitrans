import React from 'react'

import Layout from '../components/layout/Layout'

const HourseCard = ({ name, img, description }) => {
    return (
      <div className='bg-gray-400 rounded-lg overflow-hidden shadow-lg'>
        <img src={img} alt={name} />
        <div className='p-3 text-gray-800'>
          <h2
            className='text-2xl font-bold'
          >{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    )
  }

const Social = () => {
  return (
    <Layout>
        <h1>hola esto es un h1</h1>
        <HourseCard 
        name='caballito' 
        img="https://w0.peakpx.com/wallpaper/274/508/HD-wallpaper-horses-animals-wild-plain.jpg"
        description='asdasdasd asd asd as das dasdas'
        />
    </Layout>
  )
}

export default Social