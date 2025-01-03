import { Product } from "../../data/productsData";

function ContentCatalog(){
    return(
        <>
            <div className="w-full h-auto">
                {
                    Product.map((item) => {
                        <div key={item.id}>
                            <p>{item.image}</p>
                            <p>{item.name}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}



export default ContentCatalog;