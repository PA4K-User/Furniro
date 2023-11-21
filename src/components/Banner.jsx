import React from 'react'
import interiorBg from '../assets/banner/interiorBg.png'

const Banner = () => {
  return (
    <>
        <div className='relative'>
            <img src={interiorBg} alt="interiorBg" className='w-full h-screen object-cover'/>
            <div className='absolute top-[20%] right-[10%] w-[600px] h-[300px] xl:w-[1200px] xl:h-[600px] bg-[#FFF2E3] p-10 font-popins flex flex-col gap-8 rounded-xl'>
                <p className='text-3xl font-semibold'>New Arrival</p>
                <h1 className='text-8xl text-primary font-bold'>Discover Our</h1>
                <h1 className='text-8xl text-primary font-bold'>New Collection</h1>
                <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Aliquid, numquam.</p>
                <button className='bg-primary text-center text-2xl text-white font-bold max-w-[300px] h-[100px]'>BUY NOW</button>
            </div>
        </div>
    </>
  )
}

export default Banner