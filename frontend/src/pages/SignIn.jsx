import React, { useState } from 'react'
import BGIMG from '../images/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import { Link } from 'react-router-dom'
import Logo from '../images/Logonetflix.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {TailSpin} from 'react-loader-spinner'



const SignIn = () => {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({
            ...formData, [e.target.name]:e.target.value
        })
    }

    const handleSubmit =  (e) =>{
        e.preventDefault()
        sendDataToBackend(formData)
    }

    const sendDataToBackend = async(formData) => {
        try {
            console.log("trying");
            setIsLoading(true)
            const res = await axios.post("/api/v1/users/signin", formData)
            console.log(res.data)
            setIsLoading(false)
            if(res.data.statusCode == 200){
                navigate('/feed');
            }
        } catch (error) {
            console.log('ERROR IN LOGIN')
        }
    }

    return (
        <div className='signinbg relative flex items-center flex-col h-screen '>
            <img src={BGIMG} alt="" className='absolute w-full max-h-screen' />
            <img src={Logo}  className='w-52 left-0 top-0 mt-5 ml-16 z-10 absolute' alt="" />
            <button  style={{backgroundColor:'red'}} className='z-10 login-btn text-white font-semibold px-4 py-1 h-10 mt-8 absolute right-0 mr-20 align-middle items-center text-center rounded-md' ><Link to={'/signup'}> Sign Up</Link></button>


            <div className='bg-black absolute z-10 px-16 flex flex-col text-zinc-400 py-24 gap-6 opacity-80 rounded-xl'>
                <form method='post' onSubmit={handleSubmit} className='flex flex-col gap-6'>

                <h2 className='font-semibold text-white text-3xl'>Sign In</h2>
                <input onChange={handleChange} type="text" placeholder='Email id or phone number' name="email" id="" className='bg-zinc-800 px-4 w-72 py-3 rounded-md opacity-100' />
                <input onChange={handleChange} type="password" name="password" placeholder='Password' id="" className='bg-zinc-800 px-4 w-72 py-3 rounded-md opacity-100' />
                <button className='z-10 login-btn text-white font-semibold px-4 py-1 h-10 align-middle items-center text-center rounded-md items-center justify-center flex' style={{ backgroundColor: 'red' }}>{isLoading?<TailSpin color='white' height={25}/> : "Sign in"}</button>
                <div className='flex justify-between'>
                    <span><input type="checkbox" className='' /> Remember me</span>
                    <span>Need help?</span>
                </div>
                <div className='flex flex-col w-72'><span>New to Netflix? <Link className="text-white" to={'/signup'}>Sign up now</Link>.</span>
                <span >
                    <br />Sign in is protected by Google reCAPTCHA to ensure you’re not a bot. 
                </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn