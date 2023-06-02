const Footer = () => {
    return (
        <footer className='bg-slate-500 text-white text-center p-3 mt-auto'>
            <p className='text-sm'>
                &copy; 2021 - {new Date().getFullYear()} | Equitrans_Andreu | <a href='https://www.linkedin.com/in/brandon-lee-2a1a6b1a1/' target='_blank' rel='noreferrer'>Brandon Lee</a>
            </p>
        </footer>
    )
}

export default Footer