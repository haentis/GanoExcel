// import ContentCatalog from "./ContentCatalog";
// import FindBlock from "./findBlock";
import { Product } from "../../data/productsData";
import { motion } from "motion/react";
import { data, Link } from "react-router";
import { useEffect, useState } from "react";


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


const findProduct = (titleProduct, listProducts) => {
    if (!titleProduct) {
        return listProducts;
    } else {
        return listProducts.filter(({ name }) =>
            name?.toLowerCase().includes(titleProduct?.toLowerCase().trim() || "")
        );
    }
};

function MainCatalog() {
    const [titleSearch, setTitleSearch] = useState(""); 
    const [titleList, setTitleList] = useState(Product); 

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredProducts = findProduct(titleSearch, Product);
            setTitleList(filteredProducts);
        }, 300);

        return () => clearTimeout(debounce);
    }, [titleSearch]);

    return (
        <>
            <div className="w-[100%] h-[70px] pt-44  rounded-lg flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Введите название товара..."
                    value={titleSearch} 
                    onChange={(e) => setTitleSearch(e.target.value)}
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
            <div className="w-full  min-h-[1000px] flex flex-col items-center justify-center pb-16">
            
                <div className="w-full h-auto flex flex-row flex-wrap lg:gap-9 gap-3  justify-center items-center lg:mt-14 mt-6">
                    {titleList.length > 0 ? (
                        titleList.map((item) => (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={animation}
                                viewport={{ amount: 0.1, once: true }}
                                key={item.id}
                                className="w-[25%] h-[450px] shadow-lg flex flex-col rounded-lg items-center justify-center gap-7 min-w-[300px]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name || "Image"}
                                    className="w-[90%] h-[300px]"
                                />
                                <p className="text-2xl">{item.name}</p>
                                <Link
                                    to={`/product/${item.id}`}
                                    className="w-[70%] h-[40px] bg-green-500 rounded-lg text-white whitespace-nowrap hover:scale-[1.06] ease-in-out duration-200 flex justify-center items-center"
                                >
                                    Узнать подробнее
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-xl text-gray-500 mt-10">Товары не найдены.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default MainCatalog;