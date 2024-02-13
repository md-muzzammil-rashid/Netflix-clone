import React, { useState } from 'react'
import {GrAdd} from "react-icons/gr"

const DropdownDetails = ({title, desc}) => {
    const [toggleDesc, setToggleDest]= useState(false)
  return (
    <div className='m-1'>
        <div onClick={()=>setToggleDest((prev)=>!prev)} className='flex  justify-between bg-zinc-900 w-5/6 m-auto text-2xl px-16 py-8 font-semibold hover:bg-zinc-800 cursor-pointer transition-all'>
            <span>{title}</span>
            <span > <GrAdd className={`text-3xl ${toggleDesc?"rotate-45":''} `} /> </span>
        </div>
        {toggleDesc&&
        <div className={`dropdown ${toggleDesc?"toggleOpen":""} flex border-t-4 border-black justify-between bg-zinc-900 w-5/6 m-auto text-2xl px-16 py-8 font-semibold`}>
            {desc}
        </div>
}
    </div>
  )
}

export default DropdownDetails