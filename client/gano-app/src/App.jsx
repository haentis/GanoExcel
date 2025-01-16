import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import FullTovar from "./pages/FullTovar";
import Contact from "./pages/Contact";
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Catalog" element={<Catalog/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/product/:id" element={<FullTovar/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
