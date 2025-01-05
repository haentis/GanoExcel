import AboutArea from "../components/AboutArea";
import AboutGano from "../components/AboutGano";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import License from "../components/License";
import ProductArea from "../components/ProductArea";

function Home(){
    return(
        <>
           <Header/>
           <Banner/>
           <AboutArea/>
           <ProductArea/>
           <License/>
           <AboutGano/>
           <Footer/>
        </>
    )
}


export default Home;