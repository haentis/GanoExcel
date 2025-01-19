function Footer() {
    return (
        <footer className="w-full bg-black text-white py-6 align-bottom">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">GanoKZ</h2>
                    <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="/" className="text-gray-400 hover:text-white transition">Главная</a>
                    <a href="/AboutUs" className="text-gray-400 hover:text-white transition">О Компании</a>
                    <a href="/Contact" className="text-gray-400 hover:text-white transition">Контакты</a>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
