import React, { useState } from 'react'
import BGIMG from '../images/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import { Link } from 'react-router-dom'
import Logo from '../images/Logonetflix.png'
import axios from 'axios'



const Signup = () => {

    // const HandleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("handle called")
    //     sendData()
    // }

    // const sendData = async () => {
    //     console.log("called");
    //     const res = await fetch("/api/v1/users/signup", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email: 'ayaan5@ayaan', password: "ayaan", displayName: "ayaan" })
    //     })
    //     console.log("next");
    //     res && console.log(res)
    //     if(!res)
    //     console.log("no data get", res)
    // }
    // const handleForm = (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData(e.target);
    //     const { email, displayName, password } = Object.fromEntries(formData);
    
    //     console.log(email, displayName, password);
    // };
    
    const [formData , setFormData] = useState({})
    const handleChange = (e)=>{
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const sendDataToBackend = async (formData) =>{
       try {
        console.log("trying");
        const res =  await axios.post("/api/v1/users/signup",formData)
        console.log(res.data)
       } catch (error) {
            console.log("error")
       }
    }

    const HandleSubmit = (e) =>{
        e.preventDefault();
        sendDataToBackend(formData)
    }



    return (
        <div className='signinbg relative flex items-center flex-col h-screen '>
            <img src={BGIMG} alt="" className='absolute w-full max-h-screen' />
            <img src={Logo} className='w-52 left-0 top-0 mt-5 ml-16 z-10 absolute' alt="" />
            <button style={{ backgroundColor: 'red' }} className='z-10 login-btn text-white font-semibold px-4 py-1 h-10 mt-8 absolute right-0 mr-20 align-middle items-center text-center rounded-md'><Link to={'/signin'}> Sign In</Link></button>


            <div className='bg-black absolute z-10 px-16 flex flex-col text-zinc-400 py-24 gap-6 opacity-80 rounded-xl'>
                <form onSubmit={HandleSubmit} method='POST' className='flex flex-col gap-6 ' >
                    <h2 className='font-semibold text-white text-3xl'>Sign In</h2>
                    <input onChange={handleChange} type="text" placeholder='Email id or phone number' name="email" id="email" className='bg-zinc-800 px-4 w-72 py-3 rounded-md opacity-100' />
                    <input onChange={handleChange} type="text" placeholder='Display name' name="displayName" id="" className='bg-zinc-800 px-4 w-72 py-3 rounded-md opacity-100' />
                    <input onChange={handleChange} type="text" name="password" placeholder='Password' id="" className='bg-zinc-800 px-4 w-72 py-3 rounded-md opacity-100' />
                    <button type='submit' className='z-10 login-btn text-white font-semibold px-4 py-1 h-10 align-middle items-center text-center rounded-md' style={{ backgroundColor: 'red' }}>Sign Up</button>
                    <div className='flex justify-between'>
                        <span><input type="checkbox" className='' disabled/> Remember me</span>
                        <span>Need help?</span>
                    </div>
                    <div className='flex flex-col w-72'><span>Already on Netflix? <Link className='text-white' to={'/signin'}>Sign in now</Link>.</span>
                        <span >
                            <br />Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
                        </span>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Signup