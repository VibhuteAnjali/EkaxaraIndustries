import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import "./style/App.css"
import AboutUs from './Components/AboutUs'
import Product from './Components/Product'
import Carousel from './Components/Carousel'
import VissionMission from './Components/VissionMission'
import Poster from './Components/Poster'
import Footer from './Components/Footer'
export default function App() {
  return (
    <div className='App'
    ><Navbar/>
    <Home/>
    <AboutUs/>
    <VissionMission/>
    <Product/>
    <Carousel/>
    <Poster/>
    <Footer/>
    </div>
  )
}
