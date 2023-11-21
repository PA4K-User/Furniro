import React from 'react'
import bg from '../assets/Checkout/bg.png'
import logo from '../assets/banner/LogoIcon.png'

const ImagePage  = (props) => {
  return (
    <>
        <div className='relative w-full'>
          <img src={bg} alt="" className=' blur-sm w-full h-[316px] object-cover' />
          <div className='absolute top-[20%] right-[45%] text-center flex flex-col justify-center items-center gap-2'>
            <img src={logo} alt="/" className='w-20 h-20 bg-center'/>
            <h1 className='text-5xl font-bold'>{props.name}</h1>
            <p className=' flex gap-2'><span>Home &gt;</span>{props.name}</p>
          </div>                    
        </div>
    </>
  )
}

export default ImagePage