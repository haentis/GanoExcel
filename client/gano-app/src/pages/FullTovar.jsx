import { useParams } from "react-router";
import { Product } from "../data/productsData";

function FullTovar(){

    const { id } = useParams();
    const tovar = Product.find((item) => item.id === parseInt(id));

    return(
        <>
            <p>{tovar.name}</p>
        </>
    )
}



export default FullTovar;