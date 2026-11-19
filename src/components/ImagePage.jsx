import { Link } from 'react-router-dom'
import bg from '../assets/Checkout/bg.png'

const ImagePage = (props) => {
  return (
    <section className='relative isolate flex h-[200px] items-center justify-center overflow-hidden sm:h-[260px] lg:h-[300px]'>
      <img src={bg} alt='' className='absolute inset-0 -z-10 h-full w-full scale-105 object-cover blur-xs' />
      <div className='absolute inset-0 -z-10 bg-ivory/70' />
      <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl'>{props.name}</h1>
        <p className='mt-3 text-xs uppercase tracking-luxe text-muted'>
          <Link to='/' className='hover:text-ink'>Home</Link>
          <span className='mx-2'>/</span>
          <span className='text-ink'>{props.name}</span>
        </p>
      </div>
    </section>
  )
}

export default ImagePage
