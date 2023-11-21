import React from 'react'
import Navbar from '../components/Navbar'
import ImagePage from '../components/ImagePage'
import BillingDetails from '../components/BillingDetails'
import Frame from '../components/Frame'
import Footer from '../components/Footer'

const Checkout = () => {
  return (
    <>
        <Navbar/>
        <ImagePage name={"Checkout"}/>
        <BillingDetails/>  
        <Frame/>
        <Footer/>      
    </>
  )
}

export default Checkout