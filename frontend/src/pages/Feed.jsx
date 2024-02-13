import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../images/heroImg.jpeg'
import heroTitle from '../images/heroTitle.png'
import {FaPlay, FaPlus} from "react-icons/fa"



const Feed = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0? false: true)
        return () =>  (window.onscroll = null)
    }

  return (
    <div className='w-full'>
        <Navbar isScrolled={isScrolled} />
        <div className='relative -z-10 text-white'>
            <img src={heroImg} alt="" className='w-full max-h-screen' />
            <img src={heroTitle} alt="" className='absolute bottom-1/2 h-56 left-16' />
            <div className=' text-black flex items-center font-semibold justify-center py-2 px-6 rounded-md absolute top-2/3 gap-3 ml-24'>
                
                <button className='bg-white text-black flex items-center justify-center py-2 px-6 rounded-md  gap-3 ml-24'><FaPlay/> Play</button>
                <button className='bg-zinc-500 text-white flex items-center justify-center py-2 px-6 rounded-md  gap-3 bg-opacity-40'><FaPlay/> My List</button>
            </div>
        </div>
        <div>
            <h2 className='text-white p-2 text-xl font-semibold'>Popular on Netflix</h2>
        </div>
    </div>
  )
}

export default Feed