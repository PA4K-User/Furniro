import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/banner/LogoIcon.png'
import account from '../assets/banner/mdi_account-alert-outline.svg'
import search from '../assets/banner/akar-icons_search.svg'
import heart from '../assets/banner/akar-icons_heart.svg'
import shoppinCart from '../assets/banner/ant-design_shopping-cart-outlined.svg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/' },
  { label: 'About', to: '/' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Shop / About are placeholders that point to "/", so only Home and Contact get an active state.
  const isActive = (item) =>
    (item.label === 'Home' || item.label === 'Contact') && pathname === item.to

  return (
    <header className='sticky top-0 z-40 bg-ivory/90 backdrop-blur border-b border-line'>
      <div className='container-x flex h-16 lg:h-20 items-center justify-between'>
        <Link to='/' className='flex items-center gap-2' onClick={() => setOpen(false)}>
          <img src={logo} alt='' className='h-8 w-8 object-contain' />
          <span className='font-serif text-2xl lg:text-3xl font-semibold tracking-tight'>Furniro</span>
        </Link>

        <nav className='hidden lg:flex items-center gap-12' aria-label='Main'>
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-xs uppercase tracking-luxe transition-colors hover:text-primary ${
                isActive(item) ? 'text-primary' : 'text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-5 sm:gap-6'>
          <button aria-label='Account' className='hidden sm:block'><img src={account} alt='' className='h-5 w-5' /></button>
          <button aria-label='Search' className='hidden sm:block'><img src={search} alt='' className='h-5 w-5' /></button>
          <button aria-label='Wishlist' className='hidden sm:block'><img src={heart} alt='' className='h-5 w-5' /></button>
          <Link to='/checkout' aria-label='Cart'><img src={shoppinCart} alt='' className='h-5 w-5' /></Link>
          <button
            className='lg:hidden flex h-8 w-8 flex-col items-center justify-center gap-1.5'
            aria-label='Toggle menu'
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className='lg:hidden border-t border-line bg-ivory' aria-label='Mobile'>
          <ul className='container-x py-4'>
            {links.map((item) => (
              <li key={item.label} className='border-b border-line last:border-0'>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-sm uppercase tracking-luxe ${isActive(item) ? 'text-primary' : 'text-ink'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
