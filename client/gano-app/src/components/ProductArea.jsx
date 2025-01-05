import { Link } from "react-router";
import { Product } from "../data/productsData";
import { motion } from "motion/react";

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

function ProductArea(){


    const ProductHotFind = Product.filter((item) => item.categoria == "hot")

    console.log(ProductHotFind);
    return(
        <>
           <div className="w-full h-auto flex flex-row flex-wrap justify-center gap-14 mt-32">
                <p className="text-3xl">Популярные товары</p>
                <div className="w-full h-auto flex flex-row flex-wrap gap-12 justify-center">
                    {
                        ProductHotFind.map((item) => (
                            <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            variants={animation}
                            viewport={{amount:0.2, once:true}}
                            key={item.id} className="w-[25%] h-[450px] shadow-lg flex flex-col rounded-lg items-center justify-center gap-7 min-w-[300px]">
                                <img src={item.image} alt="image Product" className="w-[90%] h-[300px]" />
                                <p className="text-2xl">{item.name}</p>
                                <Link to={`/product/${item.id}`} className="w-[70%] h-[40px] bg-green-500 rounded-lg text-white  whitespace-nowrap  hover:scale-[1.06] ease-in-out duration-200">Узнать подробнее</Link>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export default ProductArea;