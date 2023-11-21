import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='max-w-[1960px] max-h-[500px] mx-auto mt-16'>         
            <div className='grid grid-cols-3 gap-8'>
                <div className='flex flex-col gap-8'>
                    <h3 className='text-4xl font-bold'>Funiro.</h3>
                    <p className='text-gray-400'>
                        400 University Drive Suite 200 Coral <br />
                        Gables,<br />
                        FL 33134 USA 
                    </p>
                </div>
                <div className=' col-span-2 flex justify-between'>
                    <div>
                        <ul className=' flex flex-col gap-8'>
                            <li className='text-gray-400'>Links</li>
                            <li className='font-bold'>Home</li>
                            <li className='font-bold'>Shop</li>
                            <li className='font-bold'>About</li>
                            <li className='font-bold'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className=' flex flex-col gap-8'>
                            <li className='text-gray-400'>Help</li>
                            <li className='font-bold'>Payment Options</li>
                            <li className='font-bold'>Returns</li>
                            <li className='font-bold'>Privacy Policies</li>
                        </ul>
                    </div>
                    <div>
                        <ul className=' flex flex-col gap-8'>
                        <li className='text-gray-400'>Newsletter</li>
                        <li>
                            <input type="text" placeholder='Enter Your Email Address' className='underline underline-offset-2'/>
                            <label htmlFor="" className='underline underline-offset-2 ml-4 font-bold'>SUBSCRIBE</label>
                        </li>
                        </ul>                        
                    </div>
                </div>
            </div>                
            <hr className='mt-10'/>
            <div>
                <p className=' p-10'>2023 furino.All rights reverved</p>
            </div>
        </div>
    </>
  )
}

export default Footer