import React from 'react'
import support from '../assets/Frame/customer-support.svg'
import guarantee from '../assets/Frame/guarantee.svg'
import shipping from '../assets/Frame/shipping.svg'
import trophy from '../assets/Frame/trophy.svg'

const Frame = () => {
  return (
    <>
        <div className='w-full h-[270px] bg-[#FAF3EA] flex justify-center items-center'>
            <div className='max-h-[70px] w-[80%] flex justify-between gap-4 px-10'>
                <div className='flex gap-2'>
                    <img src={trophy} alt="/" />
                    <div>
                        <h1 className='text-black text-2xl font-bold'>High Quality</h1>
                        <p>crafted from top materials</p>
                    </div>
                    
                </div>
                <div className='flex gap-2'>
                    <img src={guarantee} alt="/" />
                    <div>
                        <h1 className='text-black text-2xl font-bold'>High Quality</h1>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src={shipping} alt="/" />
                    <div>
                        <h1 className='text-black text-2xl font-bold'>High Quality</h1>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src={support} alt="/" />
                    <div>
                        <h1 className='text-black text-2xl font-bold'>High Quality</h1>
                        <p>crafted from top materials</p>
                    </div>
                </div>
            </div>            
        </div>
    </>
  )
}

export default Frame