import React from 'react'

import ins1 from '../assets/Inspiratons/Inspiration1.png'
import ins2 from '../assets/Inspiratons/Inspiration2.png'
import ins3 from '../assets/Inspiratons/Inspiration3.png'
import rightArrow from '../assets/Inspiratons/RightArrow.svg'

import grayCircle from '../assets/Inspiratons/GrayCircle.svg'
import activeCircle from '../assets/Inspiratons/ActiveCircle.svg'

const Inspirations = () => {
  return (
    <>
        <div className='relative w-full h-[670px] bg-[#FBF7F2] mt-10 pt-10'>
            <div className=' max-w-[1990px] mx-auto flex justify-between items-center gap-4'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-black font-bold text-6xl'>50+ Beautiful rooms <br/> inspiration</h1>
                    <p>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</p>
                    <button className='text-center text-white font-bold border-none bg-primary py-2 px-6 max-w-[150px]'>Explore More</button>
                </div>
                <div className='flex gap-4'>
                    <img src={ins1} alt="/" className=' w-[370px] h-[570px]'/>
                    <img src={ins2} alt="/" className=' w-[370px] h-[470px]'/>
                    <img src={ins3} alt="/" className=' w-[370px] h-[470px]'/>
                </div>
            </div>
            <div className='absolute bottom-[15%] right-[47%] flex'>
                <div className=' bg-gray-200/40 text-center p-4'>
                    <h3>01 ---- Bed Room</h3>
                    <h2 className='text-2xl font-bold'>Inner Peace</h2>
                </div>
                <div className='flex justify-end items-end'>
                    <button className='text-white bg-primary max-h-[25px] justify-end px-2'><img src={rightArrow} alt="/" /></button>
                </div>                
            </div>
            <div className='absolute bottom-[15%] right-[36%] flex gap-3'>
                <img src={activeCircle} alt="/" />
                <img src={grayCircle} alt="/" />
                <img src={grayCircle} alt="/" />
                <img src={grayCircle} alt="/" />
            </div>
        </div>
    </>
  )
}

export default Inspirations