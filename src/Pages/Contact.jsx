import React from 'react'
import Navbar from '../components/Navbar'
import ImagePage from '../components/ImagePage'
import GetInTouch from '../components/GetInTouch'
import Frame from '../components/Frame'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <ImagePage name ={"Contact"}/>
        <GetInTouch/>
        <Frame/>
        <Footer/>
    </>
  )
}

export default Contact