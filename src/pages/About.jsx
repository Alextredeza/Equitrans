import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
    return (
        <Layout>
            <div className='flex flex-wrap'>
                <div className='w-1/2'>
                    <p className='text-2xl' >Sobre Nosotros</p>
                    <div className='mt-3'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, iste! Iste, odio.</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src="https://thypix.com/wp-content/uploads/horse-77.jpg" alt="" className='rounded-md' />
                </div>
            </div>
        </Layout>
    )
}

export default About