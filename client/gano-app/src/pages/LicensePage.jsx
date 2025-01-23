import Header from "../components/Header";
import Footer from "../components/Footer";

function License(){
    return(
        <>
            <Header/>
            <iframe 
                src="https://heyzine.com/flip-book/c241a8f244.html" 
                width="100%" 
                height="500" 
                frameborder="0" 
                allowfullscreen 
                className="pt-24 lg:h-[1000px]"
                >
            </iframe>
            <Footer/>
        </>
    )
}


export default License;