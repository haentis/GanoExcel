import logoHeader from '/public/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="w-full h-16 shadow-lg flex justify-between items-center px-6 fixed bg-white z-30">
                <img src={logoHeader} alt="Gano Logo" className="h-10 cursor-pointer" />

        
                <nav className="flex items-center gap-6 text-lg">
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
                        О Нас
                    </Link>
                    <Link 
                        to={'/Info'} 
                        className="hover:text-blue-600 transition duration-300">
                        Нужная информация
                    </Link>
                </nav>

                <Link 
                    to={'/Contact'} 
                    className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                    Связаться с нами
                </Link>
            </div>
        </>
    );
}

export default Header;
