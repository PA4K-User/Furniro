import { useState, useEffect } from 'react'
import clock from '../assets/GetInTouch/bi_clock-fill.svg'
import phone from '../assets/GetInTouch/bxs_phone.svg'
import vector from '../assets/GetInTouch/Vector.svg'

const info = [
  { icon: vector, title: 'Address', lines: ['236 5th SE Avenue, New', 'York NY10000, United States'] },
  { icon: phone, title: 'Phone', lines: ['Mobile: +(84) 546-6789', 'Hotline: +(84) 456-6789'] },
  { icon: clock, title: 'Working Time', lines: ['Monday-Friday: 9:00 - 22:00', 'Saturday-Sunday: 9:00 - 21:00'] },
]

const GetInTouch = () => {
  // Restore the draft saved in sessionStorage (read once, on first render)
  const [name, setName] = useState(() => sessionStorage.getItem('name') || '')
  const [email, setEmail] = useState(() => sessionStorage.getItem('email') || '')
  const [subject, setSubject] = useState(() => sessionStorage.getItem('subject') || '')
  const [message, setMessage] = useState(() => sessionStorage.getItem('message') || '')

  useEffect(() => { sessionStorage.setItem('name', name) }, [name])
  useEffect(() => { sessionStorage.setItem('email', email) }, [email])
  useEffect(() => { sessionStorage.setItem('subject', subject) }, [subject])
  useEffect(() => { sessionStorage.setItem('message', message) }, [message])

  return (
    <section className='container-x section-y'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='section-title'>Get In Touch With Us</h2>
        <p className='mt-5 text-sm sm:text-base leading-relaxed text-muted'>
          For More Information About Our Product &amp; Services. Please Feel Free To Drop Us An Email.
          Our Staff Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className='mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-24'>
        <div className='flex flex-col gap-10'>
          {info.map((item) => (
            <div key={item.title} className='flex gap-5'>
              <img src={item.icon} alt='' className='mt-1 h-6 w-6 shrink-0' />
              <div>
                <h3 className='font-serif text-2xl'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted'>
                  {item.lines.map((line) => (
                    <span key={line} className='block'>{line}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form action='/contact' className='flex flex-col gap-6'>
          <div>
            <label htmlFor='contact-name' className='field-label'>Your name</label>
            <input id='contact-name' name='name' type='text' placeholder='Abc' className='field' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='contact-email' className='field-label'>Email address</label>
            <input id='contact-email' name='email' type='email' placeholder='Abc@def.com' className='field' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='contact-subject' className='field-label'>Subject</label>
            <input id='contact-subject' name='subject' type='text' placeholder='This is an optional' className='field' value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div>
            <label htmlFor='contact-message' className='field-label'>Message</label>
            <textarea id='contact-message' name='message' rows={5} placeholder="Hi i'd like to ask about" className='field resize-none' value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type='submit' className='btn-primary self-start'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default GetInTouch
