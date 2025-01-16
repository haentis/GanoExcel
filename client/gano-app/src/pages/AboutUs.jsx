import Header from "../components/Header";
import Footer from '../components/Footer';
import bannerImage from '/public/BannerImage.png';
import ganoCenter from '/public/ganodom.jpg';
import { motion } from "motion/react";

const animationName = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const animationList = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function AboutUs() {
    return (
        <>
            
            <Header />
            <div className="w-full bg-gray-100 overflow-hidden">
                <div className="max-w-screen-lg mx-auto pt-40 flex flex-col items-center gap-10 px-4 sm:px-6 pb-20">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-4xl sm:text-5xl text-gray-900 font-bold text-center"
                    >
                        Gano Excel: Мировой лидер в области здоровья и благополучия
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed"
                    >
                        <b>Gano Excel</b> – это международная компания, специализирующаяся на производстве и
                        распространении продуктов на основе гриба ганодермы (лингжи). С момента своего основания
                        в 1995 году в Малайзии, Gano Excel стала символом качества, инноваций и заботы о здоровье
                        миллионов людей по всему миру.
                    </motion.p>

                    <img src={bannerImage} alt="banner" className="rounded-lg shadow-lg w-full max-w-lg" />

                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-3xl sm:text-4xl font-bold text-gray-800 mt-10"
                    >
                        Что такое ганодерма?
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-base sm:text-lg text-gray-600 text-center leading-relaxed"
                    >
                        Ганодерма, также известная как гриб Рейши или "гриб бессмертия", веками используется
                        в восточной медицине благодаря своим уникальным целебным свойствам.
                    </motion.p>

                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-base sm:text-lg text-gray-700 space-y-4 mt-5"
                    >
                        <motion.li variants={animationList}>
                            <b>Полисахариды</b>, которые поддерживают иммунную систему.
                        </motion.li>
                        <motion.li variants={animationList}>
                            <b>Антиоксиданты</b>, замедляющие старение.
                        </motion.li>
                        <motion.li variants={animationList}>
                            <b>Адаптогены</b>, способствующие стрессоустойчивости.
                        </motion.li>
                    </motion.ul>

                    <img src={ganoCenter} alt="Gano Center" className="rounded-lg shadow-lg w-full max-w-lg mt-10" />

                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-3xl sm:text-4xl font-bold text-gray-800 mt-10"
                    >
                        Наша миссия
                    </motion.h3>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={animationName}
                        className="text-base sm:text-lg text-gray-600 text-center leading-relaxed"
                    >
                        Мы стремимся улучшать качество жизни людей, предлагая натуральные, высокоэффективные
                        продукты, которые соединяют древние традиции и современные технологии.
                    </motion.p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
