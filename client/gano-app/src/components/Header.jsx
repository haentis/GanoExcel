import logoHeader from '/public/Logo.png';
import {Link} from 'react-router-dom';
function Header(){ 
    return(
        <>
            <div className="w-full h-14 shadow-xl flex gap-14 z-30">
                <img src={logoHeader} alt="" className='pl-5'/>
                <nav className='flex flex-row items-center gap-5 text-xl'>
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