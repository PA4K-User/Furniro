import React from 'react'

import redCircle from '../assets/OurProducts/RedCircle.svg'
import greenCircle from '../assets/OurProducts/GreenCircle.svg'
import syltherine from '../assets/OurProducts/Syltherine.png'
import leviosa from '../assets/OurProducts/Leviosa.png'
import lolito from '../assets/OurProducts/Lolito.png'
import respira from '../assets/OurProducts/Respira.png'
import grifo from '../assets/OurProducts/Grifo.png'
import muggo from '../assets/OurProducts/Muggo.png'
import pingky from '../assets/OurProducts/Pingky.png'
import potty from '../assets/OurProducts/Potty.png'
import share from '../assets/OurProducts/ShareOverlay.svg'
import compare from '../assets/OurProducts/CompareOverlay.svg'
import like from '../assets/OurProducts/HeartOverlay.svg'

const OurProducts = () => {
  return (
    <>
        <div className='max-w-[1690px] mx-auto text-gray-400'>
            <h1 className='text-center text-4xl text-black font-bold mb-10'>Our Products</h1>
            <div className='grid grid-cols-4 gap-8'>
                <div className='relative' >
                    <img src={syltherine} alt="/"/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Syltherine</h3>
                        <p>Stylish cafe chair</p>
                        <p className='text-black font-bold'>Rp 2.500.000 <span className='text-gray-400 line-through'>Rp 3.500.000</span></p>
                     </div>
                     <img src={redCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>-30%</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>                                          
                </div>
                <div className='relative'>
                    <img src={leviosa} alt="/"/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Leviosa</h3>
                        <p>Stylish cafe chair</p>
                        <p className='text-black font-bold'>Rp 2.500.000</p>
                     </div>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>                                         
                </div>
                <div className='relative'>
                    <img src={lolito} alt="/" className='h-[600px]'/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Lolito</h3>
                        <p>Luxury big sofa</p>
                        <p className='text-black font-bold'>Rp 7.000.000 <span className='text-gray-400 line-through'>Rp 14.000.000</span></p>
                     </div>
                     <img src={redCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>-30%</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={respira} alt="/" className='h-[600px]'/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Respira</h3>
                        <p>Outdoor bar table and stool</p>
                        <p className='text-black font-bold'>Rp 500.000 </p>
                     </div>
                     <img src={greenCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>New</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={grifo} alt="/" className='h-[600px]'/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Grifo</h3>
                        <p>Night lamp</p>
                        <p className='text-black font-bold'>Rp 1.500.000</p>
                     </div>
                     <img src={redCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>-30%</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={muggo} alt="/" className='h-[600px]'/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Muggo</h3>
                        <p>Small mug</p>
                        <p className='text-black font-bold'>Rp 150.000 <span className='text-gray-400 line-through'>Rp 3.500.000</span></p>
                     </div>
                     <img src={greenCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>New</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={pingky} alt="/" className='h-[600px]'/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Pingky</h3>
                        <p>Cute bed set</p>
                        <p className='text-black font-bold'>Rp 7.000.000 <span className='text-gray-400 line-through'>Rp 14.000.000</span></p>
                     </div>
                     <img src={redCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>-30%</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={potty} alt="/" className='h-[600px]'/>
                     <div className=' bg-gray-200 p-4'>
                        <h3 className='text-black text-xl font-bold'>Potty</h3>
                        <p>Minimalist flower pot</p>
                        <p className='text-black font-bold'>Rp 500.000</p>
                     </div>
                     <img src={greenCircle} alt="/" className='absolute top-4 right-4' />
                     <p className='absolute top-7 right-5 text-white'>New</p>
                     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center gap-8'>
                            <button className=' text-primary text-xl font-bold bg-white px-14 py-3'>Add to cart</button>
                            <div className='w-full flex justify-between px-14'>
                                <div className='flex font-bold gap-1'>
                                    <img src={share} alt="/" />
                                    <h3>Share</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={compare} alt="/" />
                                    <h3>Compare</h3>
                                </div>
                                <div className='flex font-bold gap-1'>
                                    <img src={like} alt="/" />
                                    <h3>Like</h3>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='rounded-none border border-primary text-primary text-center font-bold py-3 px-28 mt-10 mb-10'>Show More</button>
            </div>
        </div>
    </>
  )
}

export default OurProducts