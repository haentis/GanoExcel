import { Product } from "../data/productsData";

function ProductArea(){
    return(
        <>
            <div className="w-full h-[600px]">
                {
                    Product.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt="image Product" />
                            <p>{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default ProductArea;