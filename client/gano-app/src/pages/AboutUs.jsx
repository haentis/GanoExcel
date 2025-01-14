import Header from "../components/Header";
import Footer from '../components/Footer';
import bannerImage from '/public/BannerImage.png';
import ganoCenter from '/public/ganodom.jpg';
import { motion } from "motion/react";

const animationName = {
    hidden: {
        opacity: 0,
        y: -50, 
        scale: 1, 
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1, 
        transition: {
            duration: 0.30, 
            ease: [0.10, 0.1, 0.10, 0.15],
        },
    },
};


const animationList = {
    hidden: {
        opacity: 0,
        x: 150, 
        scale: 1, 
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1, 
        transition: {
            duration: 0.60, 
            ease: [0.10, 0.1, 0.10, 0.15],
        },
    },
};

function AboutUs(){
    return(
        <>
           <Header/>
           <div className="w-full h-auto pt-40 bg-cover flex flex-col justify-center items-center gap-10 p-20">
            <motion.h1 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-5xl text-black">
                Gano Excel: Мировой лидер в области здоровья и благополучия
            </motion.h1>
            <motion.p 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-3xl text-black text-center">
                <b>Gano Excel</b> – это международная компания, специализирующаяся на производстве и <br />
                распространении продуктов на основе гриба ганодермы (лингжи). <br />
                С момента своего основания в 1995 году в Малайзии, Gano Excel стала символом качества, <br />
                инноваций и заботы о здоровье миллионов людей по всему миру.
            </motion.p>
            <motion.h2
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-4xl font-bold">Что такое ганодерма?</motion.h2>
            <motion.p 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-3xl text-center">
            Ганодерма, также известная как гриб Рейши или "гриб бессмертия", <br />
            веками используется в восточной медицине благодаря своим уникальным <br />
            целебным свойствам. <br />
            Этот гриб содержит:
            </motion.p>
            <motion.ul 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-3xl">
                <motion.li
                 initial="hidden"
                 whileInView="visible"
                 variants={animationList}
                ><b>Полисахариды</b>, которые поддерживают иммунную систему.</motion.li>
                <motion.li
                 initial="hidden"
                 whileInView="visible"
                 variants={animationList}
                ><b>Антиоксиданты</b>, замедляющие старение.</motion.li>
                <motion.li
                 initial="hidden"
                 whileInView="visible"
                 variants={animationList}
                ><b>Адаптогены</b>, способствующие стрессоустойчивости.</motion.li>
            </motion.ul>
            <img src={bannerImage} alt="bannerImage" />

            <motion.h3 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-5xl font-bold">Наша миссия</motion.h3>
            <motion.p 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-3xl text-center">
                Мы стремимся улучшать качество жизни людей, предлагая натуральные, <br />
                высокоэффективные продукты, которые соединяют древние традиции и современные технологии.
            </motion.p>
            <motion.h4 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-4xl font-bold">Почему выбирают Gano Excel?</motion.h4>
            <motion.ul 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-3xl">
                <motion.li
                 initial="hidden"
                 whileInView="visible"
                 variants={animationList}
                ><b>Глобальное присутствие</b>: Компания представлена более чем в 65 странах.</motion.li>
                <motion.li
                 initial="hidden"
                 whileInView="visible"
                 variants={animationList}
                ><b>Сертифицированное качество</b>: Продукция сертифицирована такими организациями, как USDA Organic, ISO, Halal и Kosher.</motion.li>
                <motion.li
                 initial="hidden"
                 whileInView="visible"
                 variants={animationList}
                ><b>Инновационные технологии</b>: Для выращивания и обработки ганодермы используются самые современные методы.</motion.li>
            </motion.ul>
            <motion.h5 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-4xl  font-bold">Наши достижения:</motion.h5>
                <motion.ul 
                 initial="hidden"
                 whileInView="visible"
                 variants={animationName}
                className="text-3xl">
                    <motion.li
                     initial="hidden"
                     whileInView="visible"
                     variants={animationList}
                    >Более 30 лет опыта в производстве органических продуктов.</motion.li>
                    <motion.li
                     initial="hidden"
                     whileInView="visible"
                     variants={animationList}
                    >Миллионы довольных клиентов по всему миру.</motion.li>
                    <motion.li
                     initial="hidden"
                     whileInView="visible"
                     variants={animationList}
                    >Собственные фермы и производственные мощности в Малайзии.</motion.li>
                </motion.ul>
            <img src={ganoCenter} alt="gano house" />

            <motion.h6 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-4xl font-bold">Социальная ответственность</motion.h6>
            <motion.p 
             initial="hidden"
             whileInView="visible"
             variants={animationName}
            className="text-3xl text-center">
                Gano Excel активно поддерживает инициативы по сохранению окружающей <br />
                среды и улучшению качества жизни местных сообществ.
            </motion.p>
           </div>
           <Footer/>
        </>
    )
}


export default AboutUs;