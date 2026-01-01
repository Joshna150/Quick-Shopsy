import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Product from './Components/Products/Product'
import TopProducts from './Components/Topproducts/TopProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import Testinomial from'./Components/Testinomial/Testinomial'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'
import AOS from "aos"
import "aos/dist/aos.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TopRated from './Pages/TopRated'
import KidsWear from './Pages/KidsWear'
import MensWear from './Pages/MensWear'
import Electronics from './Pages/Electronics'
import TrendingProducts from './Pages/TrendingProducts'
import BestSelling from './Pages/BestSelling'
import Cart from './Pages/Cart'

function App() {
  const [orderPopup,setOrderPopup]=useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  };

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])

  return (
    
      <div className="bg-white dark:bg-gray-900 
      dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Routes>
          <Route path="/" element={
              <>
                <Hero handleOrderPopup={handleOrderPopup}/>
                <Product/>
                <TopProducts handleOrderPopup={handleOrderPopup}/>
                <Banner/>
                <Subscribe/>
                <Testinomial/>
              </>
            }/>
          <Route path="/TopRated" element={< TopRated/>} />
          <Route path="/kidsWear" element={< KidsWear/>} />
          <Route path="/MensWear" element={< MensWear/>} />
          <Route path="/Electronics" element={<Electronics/>} />
          <Route path="/Trendingproducts" element={<TrendingProducts/>} />  
          <Route path="/BestSelling" element={< BestSelling/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes> 
        <Footer/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
  
  )
}

export default App
