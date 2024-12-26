import { Product } from "../data/productsData";

function ProductArea(){
    return(
        <>
           <div className="w-full h-auto flex flex-row flex-wrap justify-center gap-14 mt-32">
                <p className="text-3xl">Популярные товары</p>
                <div className="w-full h-auto flex flex-row flex-wrap gap-12 justify-center">
                    {
                        Product.map((item) => (
                            <div key={item.id} className="w-[25%] h-[450px] shadow-lg flex flex-col rounded-lg items-center justify-center gap-7 min-w-[300px]">
                                <img src={item.image} alt="image Product" className="w-[90%] h-[300px]" />
                                <p className="text-2xl">{item.title}</p>
                                <button className="w-[70%] h-[40px] bg-green-500 rounded-lg text-white  whitespace-nowrap  hover:scale-[1.06] ease-in-out duration-200">Узнать подробнее</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export default ProductArea;