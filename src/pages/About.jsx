import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
    return (
        <Layout>
            <div className='flex flex-wrap'>
                <div className='w-1/2'>
                    <p className='text-4xl font-bold leading-tight tracking-tight border-2 rounded p-2' >Sobre Nosotros</p>
                    <div className='mt-3'>
                        <p>Nuestro equipo de expertos transportistas comprende la importancia de un manejo cuidadoso y la atención individualizada que cada caballo merece. Desde campeones de competición hasta amados caballos de compañía, nos aseguramos de que cada animal reciba un trato respetuoso y profesional en todo momento.

                            Contamos con vehículos de transporte especialmente diseñados y equipados para ofrecer comodidad y seguridad óptimas. Nuestras modernas unidades están equipadas con sistemas de ventilación, monitoreo de temperatura y suspensión especializada para garantizar un viaje suave y libre de estrés para sus equinos.

                            Nuestro equipo de transportistas altamente capacitados posee una amplia experiencia en el manejo de caballos y está comprometido con la seguridad en cada etapa del viaje. Mantenemos una comunicación constante con nuestros clientes, brindando actualizaciones periódicas sobre el progreso del transporte para brindar tranquilidad y confianza.

                            Además, cumplimos con todas las regulaciones y requisitos legales relacionados con el transporte de animales, garantizando que todas las normas de bienestar animal se cumplan rigurosamente. Trabajamos en estrecha colaboración con veterinarios y profesionales equinos para asegurarnos de que se mantengan altos estándares de atención durante todo el trayecto.

                            En Transporte Profesional de Caballos, nos enorgullece brindar un servicio de calidad sin igual. Nuestro objetivo es superar las expectativas de nuestros clientes y crear una experiencia de transporte sin complicaciones para sus caballos. Confíe en nosotros para el transporte seguro, confiable y sin estrés de sus amados equinos a su destino deseado.</p>
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