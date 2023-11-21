import React from 'react'
import Banner from "../components/Banner"
import BrowseTheRange from "../components/BrowseTheRange"
import Footer from "../components/Footer"
import Inspirations from "../components/Inspirations"
import Navbar from "../components/Navbar"
import OurProducts from "../components/OurProducts"
import Share from "../components/Share"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <BrowseTheRange/>
      <OurProducts/>
      <Inspirations/>
      <Share/>
      <Footer/>
    </>
  )
}

export default Home