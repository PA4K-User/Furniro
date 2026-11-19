import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-ivory'>
      <div className='container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr] lg:py-20'>
        <div>
          <h3 className='font-serif text-3xl font-semibold'>Furniro</h3>
          <p className='mt-5 max-w-[260px] text-sm leading-relaxed text-muted'>
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div>
          <h4 className='text-xs uppercase tracking-luxe text-muted'>Links</h4>
          <ul className='mt-5 flex flex-col gap-3 text-sm'>
            <li><Link to='/' className='hover:text-primary'>Home</Link></li>
            <li><Link to='/' className='hover:text-primary'>Shop</Link></li>
            <li><Link to='/' className='hover:text-primary'>About</Link></li>
            <li><Link to='/contact' className='hover:text-primary'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className='text-xs uppercase tracking-luxe text-muted'>Help</h4>
          <ul className='mt-5 flex flex-col gap-3 text-sm'>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h4 className='text-xs uppercase tracking-luxe text-muted'>Newsletter</h4>
          <form className='mt-5 flex border-b border-ink' onSubmit={(e) => e.preventDefault()}>
            <input
              type='email'
              aria-label='Email address'
              placeholder='Enter your email address'
              className='min-w-0 flex-1 bg-transparent py-3 text-sm placeholder:text-muted/60 focus:outline-hidden'
            />
            <button type='submit' className='py-3 pl-4 text-xs font-medium uppercase tracking-luxe hover:text-primary'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='border-t border-line'>
        <p className='container-x py-6 text-xs text-muted'>© 2023 Furniro. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
