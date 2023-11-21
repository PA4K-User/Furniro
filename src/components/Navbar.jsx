import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/banner/LogoIcon.png'
import account from '../assets/banner/mdi_account-alert-outline.svg'
import search from '../assets/banner/akar-icons_search.svg'
import heart from '../assets/banner/akar-icons_heart.svg'
import shoppinCart from '../assets/banner/ant-design_shopping-cart-outlined.svg'

const Navbar = () => {
  return (
    <>
        <div className='max-w-[2160px] h-[100px] mx-auto flex justify-between items-center text-3xl'>
            <div className='flex justify-center items-center'>
                <img src={logo} alt="logoIcon" className='w-50 h-32'/>
                <h1 className='text-4xl font-bold'>Furniro</h1>
            </div>
            <div className='hidden xl:flex gap-16'>
                <h1 className='text-primary font-medium'><Link to="/">Home</Link></h1>
                <h1 className=' font-medium'><Link to="/">Shop</Link></h1>
                <h1 className=' font-medium'><Link to="/">About</Link></h1>
                <h1 className=' font-medium'><Link to="/contact">Contact</Link></h1>
            </div>
            <div className='hidden xl:flex gap-16'>
                <img src={account} alt="accountIcon" />
                <img src={search} alt="searchtIcon" />
                <img src={heart} alt="heartIcon" />
                <Link to="/checkout"><img src={shoppinCart} alt="shoppingCartIcon" /></Link>
                
            </div>
        </div>
        
    </>
    
  )
}

export default Navbar