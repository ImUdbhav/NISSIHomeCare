import Home from "./Pages/Home"
import ServicesPage from "./Pages/ServicesPage"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Footer";





function App() {
 

  return (
    <>
    <Navbar/>
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        
        
      </Routes>
      <Footer/>
        </>
  )
}

export default App
