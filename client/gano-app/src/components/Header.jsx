import { useState } from 'react';
import logoHeader from '/public/Logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

function Header() {

    const [isOpen, setIsOpen]  = useState(false);
    
    return (
        <>
            <div className="w-full h-16 shadow-lg flex justify-between items-center px-6 fixed bg-white z-30">
                <img src={logoHeader} alt="Gano Logo" className="h-10 cursor-pointer"  />

              
                <motion.nav 
                animate={{
                    y: isOpen ? -50 : 0,
                    opacity: isOpen ? 0.4 : 1,
                  }}
                className={`${isOpen ? "hidden" : "block"} lg:flex lg:flex-row lg:items-center lg:gap-6 lg:text-lg lg:static lg:w-auto lg:h-16 top-14 right-0 w-full items-center text-xl bg-white flex gap-5 flex-col absolute p-6`}>
                    <Link 
                        to={'/'} 
                        className="hover:text-blue-600 transition duration-300">
                        Главная
                    </Link>
                    <Link 
                        to={'/Catalog'} 
                        className="hover:text-blue-600 transition duration-300">
                        Каталог
                    </Link>
                    <Link 
                        to={'/AboutUs'} 
                        className="hover:text-blue-600 transition duration-300">
                        О Компании
                    </Link>
                    <Link 
                        to={'/Contact'} 
                        className={`bg-blue-500 lg:hidden text-white px-5 py-2 rounded-full shadow-md min-w-28 inline-block hover:bg-blue-600 transition duration-300`}>
                        Связаться с нами
                    </Link>
                </motion.nav>

                <div>
                    <button className='w-10 h-[40px] bg-blue-500 lg:hidden min-w-[40px] rounded-3xl' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '☰' : '✖'}
                    </button>


                    <Link 
                        to={'/Contact'} 
                        className={`bg-blue-500 lg:text-white px-5 py-2 rounded-full shadow-md min-w-28 lg:inline-block hidden hover:bg-blue-600 transition duration-300`}>
                        Связаться с нами
                    </Link>
                </div>
                
            </div>
        </>
    );
}

export default Header;
