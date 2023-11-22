import React from 'react'
import share1 from '../assets/Share/share1.png'
import share2 from '../assets/Share/share2.png'
import share3 from '../assets/Share/share3.png'
import share4 from '../assets/Share/share4.png'
import share5 from '../assets/Share/share5.png'
import share6 from '../assets/Share/share6.png'
import share7 from '../assets/Share/share7.png'
import share8 from '../assets/Share/share8.png'
import share9 from '../assets/Share/share9.png'

const Share = () => {
  return (
    <>
    <div className='w-full h-auto pt-20 text-center'>
        <div>
            <h3>Share your setup with</h3>
            <h1 className='text-3xl font-bold mt-4'>#FuniroFurniture</h1>
        </div>
        <div className='grid grid-cols-6 gap-4 mt-10'>
          <div className=''>
            <img src={share1} alt="/" className='h-full object-cover hover:scale-105'/>
          </div>
          <div className='h-[70%] translate-y-[43%] col-span-2'>
            <img src={share2} alt="/"className='h-full object-cover hover:scale-105'/>
          </div>
          <div className='h-[70%] translate-y-[30%] row-span-2'>
            <img src={share3} alt="/" className='h-full object-contain hover:scale-105'/>
          </div>
          <div className='h-[70%] translate-y-[60%]'>
            <img src={share4} alt="/" className='h-full object-cover hover:scale-105'/>
          </div>
          <div className='translate-y-[12%]'>
            <img src={share5} alt="/" className='h-full object-cover hover:scale-105'/>
          </div>
          <div className='translate-x-[40%]'>
            <img src={share6} alt="/" className='h-full object-contain hover:scale-105'/>
          </div>
          <div className='w-[80%] translate-x-[25%] -translate-y-[14%] col-span-2'>
            <img src={share7} alt="/" className='h-full object-contain hover:scale-105'/>
          </div>
          <div className=' translate-y-[13%]'>
            <img src={share8} alt="/" className='h-full object-cover hover:scale-105'/>
          </div>
          <div className='w-full h-[70%] translate-y-[19%]'>
            <img src={share9} alt="/" className='h-full object-cover hover:scale-105'/>
          </div>                      
        </div>
        <hr className='mt-[200px]'/>
    </div>
    </>
  )
}

export default Share