// import ContentCatalog from "./ContentCatalog";
// import FindBlock from "./findBlock";
import { Product } from "../../data/productsData";
import { motion } from "motion/react";
import { Link } from "react-router";



const animation = {
    hidden: {
        opacity: 0,
        y: 50, 
        scale: 0.8, 
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


function MainCatalog(){
    return(
        <>
            <div className="w-full h-auto flex flex-col  items-center justify-center">
                <div className="w-[90%] h-[70px] shadow-xl mt-32 rounded-lg flex justify-center items-center ">
                <input 
                    type="text"
                    placeholder="Введите название товара..." 
                    className="
                        w-96 
                        h-[50px] 
                        px-4 
                        text-xl
                        text-gray-700 
                        placeholder-gray-400 
                        border 
                        border-gray-300 
                        rounded-lg 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        shadow-sm
                    " 
                />
                </div>
                <div className="w-full h-auto flex flex-row flex-wrap gap-9 justify-center mt-14">
                {
                    Product.map((item) => (
                                <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                variants={animation}
                                viewport={{amount:0.2, once:true}}
                                key={item.id} className="w-[25%] h-[450px] shadow-lg flex flex-col rounded-lg items-center justify-center gap-7 min-w-[300px]">
                                    <img src={item.image} alt="image Product" className="w-[90%] h-[300px]" />
                                    <p className="text-2xl">{item.name}</p>
                                    <Link to={`/product/${item.id}`} className="w-[70%] h-[40px] bg-green-500 rounded-lg text-white  whitespace-nowrap  hover:scale-[1.06] ease-in-out duration-200 flex justify-center items-center">Узнать подробнее</Link>
                                </motion.div>
                            ))
                    }
                </div>
                
            </div>
        </>
    )
}


export default MainCatalog;