import logoHeader from '/public/Logo.png';
import {Link} from 'react-router-dom';
function Header(){ 
    return(
        <>
            <div className="w-full h-14 shadow-md">
                <img src={logoHeader} alt="" />
                <nav className='flex flex-row items-center'>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/Catalog'}>Каталог</Link>
                    <Link to={'/AboutUs'}>О Нас</Link>
                    <Link to={'/Info'}>Нужная информация</Link>
                </nav>
            </div>
        </>
    )
}


export default Header;