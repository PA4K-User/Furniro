import React from 'react'
import dining from '../assets/BrowseTheRange/Dining.png'
import living from '../assets/BrowseTheRange/Living.png'
import bedroom from '../assets/BrowseTheRange/Bedroom.png'

const BrowTheRange = () => {
  return (
    <>
        <div className='max-w-[80%] mx-auto py-20'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Browse The Range</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex justify-center gap-8 text-center mt-16'>
              <div>
                <img src={dining} alt="Dining" className='w-[380px] h-[480px] rounded-xl object-cover hover:scale-105' />
                <h3 className='text-xl mt-4 font-bold'>Dining</h3>
              </div>
              <div>
                <img src={living} alt="Living" className='w-[380px] h-[480px] rounded-xl object-cover hover:scale-105' />
                <h3 className='text-xl mt-4 font-bold'>Living</h3>
              </div>
              <div>
                <img src={bedroom} alt="Bedroom" className='w-[380px] h-[480px] rounded-xl object-cover hover:scale-105' />
                <h3 className='text-xl mt-4 font-bold'>Bedroom</h3>
              </div>
            </div>                     
        </div>
    </>
  )
}

export default BrowTheRange