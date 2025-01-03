import ContentCatalog from "./ContentCatalog";
import { Product } from "../../data/productsData";

function MainCatalog(){
    return(
        <>
            <div className="w-full h-[1000px] bg-white flex flex-col  items-center">
                 {
                                    Product.map((item) => {
                                        <div key={item.id}>
                                            <p>{item.image}</p>
                                            <p>{item.name}</p>
                                        </div>
                                    })
                }
                <ContentCatalog/>
            </div>
        </>
    )
}


export default MainCatalog;