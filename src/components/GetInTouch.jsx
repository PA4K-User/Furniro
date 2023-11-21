import React, {useState, useEffect} from 'react'
import clock from '../assets/GetInTouch/bi_clock-fill.svg'
import phone from '../assets/GetInTouch/bxs_phone.svg'
import vector from '../assets/GetInTouch/Vector.svg'

const GetInTouch = () => {  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storedName = sessionStorage.getItem('name')    
    const storedEmail = sessionStorage.getItem('email')    
    const storedSubject = sessionStorage.getItem('subject')    
    const storedMessage = sessionStorage.getItem('message')

    if(storedName || storedEmail || storedSubject || storedMessage){
        setName(storedName);
        setEmail(storedEmail);
        setSubject(storedSubject);
        setMessage(storedMessage);
    }
  },[])
  
  useEffect(() => {    
    sessionStorage.setItem('name', name);
  },[name])

  useEffect(() => {    
    sessionStorage.setItem('email', email);
  },[email])

  useEffect(() => {    
    sessionStorage.setItem('subject', subject);
  },[subject])

  useEffect(() => {    
    sessionStorage.setItem('message', message);
  },[message])      

  return (
    <>
        <div className='w-full max-h-[1140px] py-24'>
            <div className='max-w-[1440px] mx-auto'>
                <h1 className='text-4xl font-bold text-center'>Get In Touch With Us</h1>
                <p className='mt-6 text-gray-400 text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
                <p className=' text-gray-400 text-center'>An Email. Our Staff Be There To Help You Out. Do Not Hesitate!</p>
                <div className='grid grid-cols-2 mt-24'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex gap-10'>
                            <img src={vector} alt="/" className=' -translate-y-6' />
                            <div>
                                <h2 className='text-2xl font-bold'>Address</h2>
                                <p>
                                    236 5th SE Avenue, New <br />
                                    York NY10000, United States
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <img src={phone} alt="/" className=' -translate-y-6' />
                            <div>
                                <h2 className='text-2xl font-bold'>Phone</h2>
                                <p>
                                    Mobile: +(84) 546-6789<br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <img src={clock} alt="/" className=' -translate-y-6' />
                            <div>
                                <h2 className='text-2xl font-bold'>Working Time</h2>
                                <p>
                                    Monday-Friday: 9:00 - 22:00<br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <form action="/contact" className='flex flex-col gap-8'>
                            <div>
                                <label htmlFor="">Your name</label> <br />
                                <input name='name' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Abc' className='bg-white rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16' size={60} />                        
                            </div>           
                            <div>
                                <label htmlFor="">Email address</label> <br />
                                <input name='email' onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Abc@def.com' className='bg-white rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16' size={60} />                        
                            </div>           
                            <div>
                                <label htmlFor="">Subject</label> <br />
                                <input name='subject' onChange={(e) => setSubject(e.target.value)} value={subject} type="text" placeholder='This is an optional' className='bg-white rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16' size={60} />                        
                            </div>           
                            <div>
                                <label htmlFor="">Message</label> <br />
                                <input name='message' onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder='Hi i&apos;d like to ask about' className='bg-white rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-28' size={60} />                        
                            </div>
                            <button className=' bg-primary text-white text-center font-bold rounded-md py-3 mt-10 w-[200px]' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default GetInTouch