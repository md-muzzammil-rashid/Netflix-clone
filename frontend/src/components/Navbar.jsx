import React from 'react'
import { navItems } from './constants'
import Logo from '../images/Logonetflix.png'
import { Link, useNavigate } from 'react-router-dom'
import {FaPowerOff, FaSearch} from "react-icons/fa"

const Navbar = ({isScrolled}) => {
    const navigate = useNavigate();
  return (
    <div className= {` text-white  flex fixed transition-all flex justify-between  w-full ${isScrolled?"bg-black":" " }`} > 
    <div className='flex justify-center items-center'>
        <img src={Logo} alt="" className='h-12 my-6 mx-8' />
        {navItems.map((item)=>(
            <Link to={item.link}>
                <h2 className='mx-6 font-semibold text-lg'>{item.item}</h2>
            </Link>
        ))}
    </div>
    <div className='flex gap-6 items-center mr-10'>
            <FaSearch className='text-2xl'/>
            <Link to={'/'}>
                <FaPowerOff className='text-2xl'/>
            </Link>
    </div>
    </div>
  )
}

export default Navbar