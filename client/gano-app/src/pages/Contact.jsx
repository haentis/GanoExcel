import Footer from "../components/Footer";
import Header from "../components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
    return (
        <>
            <Header />
            <div className="w-full h-auto flex justify-center items-center flex-col pt-40 gap-10 bg-gray-100 text-gray-800">
                <div className="w-11/12 md:w-2/3 lg:w-1/2 text-center bg-white p-10 rounded-lg shadow-md">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">НАШИ КОНТАКТЫ</h1>
                    <p className="text-2xl mb-4">
                        <b>Номер:</b> <span className="text-blue-600 hover:underline">+7 701 339 35 39</span>
                    </p>
                    <p className="text-2xl">
                        <b>Почта:</b> <span className="text-blue-600 hover:underline">ganokz@mail.ru</span>
                    </p>
                </div>

                
                <div className="w-11/12 md:w-2/3 lg:w-1/2 text-center h-[300px] bg-white p-10 rounded-lg shadow-md mt-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">СОЦСЕТИ</h1>
                    <div className="flex justify-center gap-6 text-3xl">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@ganoenergy?_t=ZM-8tHq8bgs2JJ&_r=1" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://wa.me/77013393539" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;
