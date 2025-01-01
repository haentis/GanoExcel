import { motion } from "motion/react";

const animation = {
    hidden: {
        opacity: 0,
        y: 100, 
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

const animation_button = {
    hidden: {
        opacity: 0,
        y: 50, 
        scale: 1, 
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1, 
        transition: {
            duration: 0.50, 
            ease: [0.10, 0.1, 0.10, 0.15],
        },
    },
};


const animation2 = {
    hidden: {
        opacity: 0,
        x: -100, 
        scale: 1, 
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1, 
        transition: {
            duration: 0.45, 
            ease: [0.10, 0.1, 0.10, 0.15],
        },
    },
};

function AboutGano() {
    return (
        <>
           <div className="w-full flex flex-col items-center mt-32 gap-8 px-4 bg-gray-50 py-16 shadow-md rounded-lg">
    <motion.h1 
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{amount:0.4, once:true}}
     className="text-4xl font-extrabold text-gray-800">
        О продукции Gano
        </motion.h1>
    <motion.p 
     initial="hidden"
     whileInView="visible"
     variants={animation}
    className="text-xl text-center text-gray-700 max-w-3xl leading-relaxed">
        Мы рады предложить вам продукцию Gano — одного из ведущих брендов в области здоровья и красоты. <br />
        Мы выбрали этот бренд для сотрудничества, чтобы вы могли получить доступ к высококачественным товарам, <br />
        которые заботятся о вашем благополучии.
    </motion.p>
    <motion.p 
     initial="hidden"
     whileInView="visible"
     variants={animation}
     className="text-xl text-center text-gray-700 max-w-3xl leading-relaxed">
        Наш магазин — это надежный источник оригинальной продукции Gano. <br />
        Мы делаем всё, чтобы процесс покупки был простым, удобным и приятным для вас.
    </motion.p>

    <div className="flex flex-col items-center mt-10 gap-6">
        <h2 className="text-3xl font-semibold text-gray-800">Почему выбирают Gano?</h2>
        <ul className="text-lg text-center text-gray-700 space-y-3 max-w-xl">
            <motion.li
             initial="hidden"
             whileInView="visible"
             variants={animation2}
             viewport={{amount:0.6, once:true}}
             className="flex items-center gap-2">
                <span className="text-green-500 text-2xl">✔</span> Натуральные ингредиенты
            </motion.li>
            <motion.li 
            initial="hidden"
            whileInView="visible"
            variants={animation2}
            viewport={{amount:0.6, once:true}}
            className="flex items-center gap-2">
                <span className="text-green-500 text-2xl">✔</span> Высокое качество продукции
            </motion.li>
            <motion.li 
            initial="hidden"
            whileInView="visible"
            variants={animation2}
            viewport={{amount:0.6, once:true}}
            className="flex items-center gap-2">
                <span className="text-green-500 text-2xl">✔</span> Широкий ассортимент для здоровья и красоты
            </motion.li>
            <motion.li
            initial="hidden"
            whileInView="visible"
            variants={animation2}
            viewport={{amount:0.6, once:true}}
            className="flex items-center gap-2">
                <span className="text-green-500 text-2xl">✔</span> Доверие миллионов покупателей по всему миру
            </motion.li>
        </ul>
    </div>

    <motion.button 
    initial="hidden"
    whileInView="visible"
    variants={animation_button}
    viewport={{amount:0.6, once:true}}
    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300">
        Перейти в каталог
    </motion.button>
</div>

        </>
    );
}

export default AboutGano;
