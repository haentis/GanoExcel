import ContentCatalog from "./ContentCatalog";
// import { Product } from "../../data/productsData";

function MainCatalog(){
    return(
        <>
            <div className="w-full h-auto flex flex-col  items-center justify-center">
                <div className="w-[90%] h-[50px] shadow-xl mt-32 rounded-lg"></div>
                 <ContentCatalog/>
            </div>
        </>
    )
}


export default MainCatalog;