// import MainCatalog from "../components/Catalog/MainCatalog";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { lazy} from 'react';

// const MarkdownPreview = lazy(() => import('../components/Catalog/MainCatalog'));


function Catalog(){
    return(
        <>
          <Header/>
          <MarkdownPreview/>
          <Footer/>
        </>
    )
}


export default Catalog;