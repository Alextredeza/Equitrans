import React from 'react'
import Layout from '../components/layout/Layout'

const Hourse = () => {

  const horses = [
    {
      id: 1,
      name: 'Horse 1',
      img: "https://w0.peakpx.com/wallpaper/274/508/HD-wallpaper-horses-animals-wild-plain.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 2,
      name: 'Horse 2',
      img: "https://w0.peakpx.com/wallpaper/274/508/HD-wallpaper-horses-animals-wild-plain.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 3,
      name: 'Horse 3',
      img: "https://w0.peakpx.com/wallpaper/274/508/HD-wallpaper-horses-animals-wild-plain.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 4,
      name: 'Horse 4',
      img: "https://w0.peakpx.com/wallpaper/274/508/HD-wallpaper-horses-animals-wild-plain.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
  ]

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

  return (
    <Layout>
      <h1
        className='text-4xl font-bold text-center'
      >Hourse</h1>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'
      >
        {horses.map(horse => (
          <HourseCard key={horse.id} {...horse} />
        ))}
      </div>
    </Layout>
  )
}

export default Hourse