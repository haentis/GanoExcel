import { Link, useParams } from "react-router-dom";
import { Product } from "../data/productsData";
import {motion} from "motion/react";
import BackIcon from '/public/back.png';


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


const animationText = {
    hidden: {
        opacity: 0,
        x: 100, 
        scale: 1, 
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1, 
        transition: {
            duration: 0.20, 
            ease: [0.10, 0.1, 0.10, 0.15],
        },
    },
};

function FullTovarComp() {
    const { id } = useParams();
    const tovar = Product.find((item) => item.id === parseInt(id));

    if (!tovar) {
        return <div className="text-center mt-10 text-red-500">Продукт не найден</div>;
    }

    return (
        <div className="w-full h-auto flex justify-center">
            <div className="w-[70%] h-auto flex lg:flex-row flex-col lg:items-start absolute shadow-xl lg:mt-36 gap-12 p-8 m-auto">
                <Link to="/Catalog" className="w-10 h-10 bg-cover text-4xl">&#10094;</Link>
                <img src={tovar.image} alt="tovarImage" className="lg:w-[50%] lg:h-[500px] shadow-lg" />
                <div className="flex flex-col gap-5">
                    <motion.h1 
                    initial="hidden"
                    whileInView="visible"
                    variants={animationName}
                    className="text-3xl lg:text-5xl font-bold text-gray-800">{tovar.name}</motion.h1>
                    <motion.p 
                     initial="hidden"
                     whileInView="visible"
                     variants={animationText}
                    className="text-lg lg:text-2xl text-gray-600">
                        <span className="font-semibold text-gray-800">Состав: </span>{tovar.composition}
                    </motion.p>
                    <motion.p
                     initial="hidden"
                     whileInView="visible"
                     variants={animationText}
                    className="text-lg lg:text-2xl text-gray-600">
                        <span className="font-semibold text-gray-800">Упаковка: </span>{tovar.packaging}
                    </motion.p>
                    <motion.p 
                     initial="hidden"
                     whileInView="visible"
                     variants={animationText}
                    className="text-lg lg:text-2xl text-gray-600">
                        <span className="font-semibold text-gray-800">Использование: </span>{tovar.application}
                    </motion.p>
                    <motion.p 
                     initial="hidden"
                     whileInView="visible"
                     variants={animationText}
                    className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-800">Описание: </span>{tovar.desc}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export default FullTovarComp;
