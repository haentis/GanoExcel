import { useParams } from "react-router";
import { Product } from "../data/productsData";

function FullTovarComp(){

    const { id } = useParams();
    const tovar = Product.find((item) => item.id === parseInt(id));

    return(
        <>
            <div className="w-[70%] h-[600px] flex lg:flex-row flex-col lg:items-start  absolute  lg:mt-36 gap-12 p-8">
                <img src={tovar.image} alt="tovarImage"  className="lg:w-[50%] lg:h-[500px] shadow-lg"/>
                <div className="flex flex-col gap-5">
                    <p className="text-6xl">{tovar.name}</p>
                    <p className="text-2xl">{tovar.composition}</p>
                    <p className="text-xl">{tovar.packaging}</p>
                    <p className="text-2xl">Использование: {tovar.application}</p>
                </div>
            </div>
        </>
    )
}



export default FullTovarComp;