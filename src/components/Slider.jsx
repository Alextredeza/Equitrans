import React from 'react'

const Slider = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {

    const [current, setCurrent] = React.useState(0)

    const prev = () => {
        setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }
    const next = () => {
        setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }

    React.useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(next, autoSlideInterval)
            return () => clearInterval(interval)
        }
    }, [])

    return (
        <div className='overflow-hidden relative'>
            <div
                className='flex'
                style={{
                    transform: `translateX(-${current * 100}%)`,
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button
                    className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                    onClick={prev}
                >
                    {'<'}
                </button>
                <button
                    className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                    onClick={next}
                >
                    {'>'}
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${current === i ? "p-2" : "bg-opacity-50"}
            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider