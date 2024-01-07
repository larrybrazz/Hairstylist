import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import Notification from './Components/Header/Notification'
import Gallery from './Components/Gallery/Gallery'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MappedCartItems from './Components/Shop/MappedCartItems'
import Checkout from './Components/Shop/Checkout'

function App() {

  return (
    <>
      <ToastContainer />
      <Notification />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mappedcartitems" element={<MappedCartItems />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
