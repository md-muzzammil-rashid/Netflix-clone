import React from 'react'
import Logo from '../images/Logonetflix.png'
import BGIMG from '../images/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import tv from '../images/tv.png'
import mobile from '../images/mobile-0819.jpg'
import kid from '../images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'
import device from '../images/device-pile-in.png'
import DropdownDetails from '../components/DropdownDetails'
import {netflixDesc} from '../components/constants'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className='flex flex-col items-center '>

       
            <div className='home-hero relative bg-black w-screen h-screen'>
                <img  src={BGIMG} alt="" className='absolute w-full max-h-screen' />

            </div>
            <div className='absolute top-8  home-header flex justify-between z-10 w-full max-w-7xl ' >
                <img className='z-10 h-16' src={Logo} alt="" />
                <button className='z-10 login-btn text-white font-semibold px-4 py-1 h-10 align-middle items-center text-center rounded-md'><Link to={'/signin'}>Sign In</Link></button>
            </div>
            <div className='flex flex-col items-center absolute top-80 pt-8 text-white w-full flex justify-center'>
            <h1 className='font-extrabold text-7xl text-center max-w-7xl'>

            Unlimited movies, TV shows and more
            </h1>
           <div className='flex items-center justify-center z-20 gap-2 my-4'>
            <input type="text" placeholder='Email address' className='bg-black opacity-50 font-semibold min-w-96 box-border focus:outline-zinc-400 focus:border-2 p-4 focus:border-opacity-0  rounded-md ' />
            <button style={{backgroundColor:'#ff0000'}} className='px-16 bg-red-600 flex justify-center font-bold text-2xl rounded-md h-16  items-center align-middle'><span>Get Started ❯ </span></button>
           </div>

            </div>
        <div className='relative max-w-s max-w-7xl flex flex-col items-center'>


            <div className='bg-zinc-800 h-3 w-screen '>&nbsp;</div>

            <div className='h-5/6 w-full text-white flex bg-black py-20'>
                <div className='w-1/2 flex flex-col justify-center items-center '>
                    <h1 className='font-extrabold text-6xl'>
                        Enjoy on your TV
                    </h1>
                    <h3 className='font-bold px-32 py-16 text-3xl text-center pt-8'>
                        Lorem ipsum dolor sit,  neque sed dolores obcaecati maiores ducimus ipsum possimus ipsam!
                    </h3>
                </div>
                <div className='w-1/2'>
                    <img src={tv} alt="" />
                    {/* <video src=""></video> */}
                </div>
            </div>
            <div className='bg-zinc-800 h-3 w-screen  '>&nbsp;</div>
            <div className='h-5/6 w-full text-white flex bg-black py-20'>
                <div className='w-1/2'>
                    <img src={mobile} alt="" />
                    {/* <video src=""></video> */}
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <h1 className='font-extrabold text-6xl px-32 text-start text space-y-6'>
                        Download your shows to watch offline
                    </h1>
                    <h3 className='font-bold px-32 py-16 text-3xl text-center pt-8'>
                        Lorem ipsum dolor sit,  neque sed dolores obcaecati maiores ducimus ipsum possimus ipsam!
                    </h3>
                </div>
            </div>
            <div className='bg-zinc-800 h-3 w-screen  '>&nbsp;</div>
            <div className='h-5/6 w-full text-white flex bg-black py-20'>
                <div className='w-1/2 p-16'>
                    <img src={device} alt="" />
                    {/* <video src=""></video> */}
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <h1 className='font-extrabold text-6xl px-16 text-start text space-y-6'>
                        Download your shows to watch offline
                    </h1>
                    <h3 className='font-bold px-16 py-16 text-3xl  pt-8'>
                        Lorem ipsum dolor sit,  neque sed dolores obcaecati maiores ducimus ipsum possimus ipsam!
                    </h3>
                </div>
            </div>

            <div className='bg-zinc-800 h-3  w-screen '>&nbsp;</div>

            <div className='h-5/6 w-full text-white flex bg-black py-20'>
                <div className='w-1/2 flex flex-col justify-center items-center '>
                    <h1 className='font-extrabold text-6xl'>
                        Enjoy on your TV
                    </h1>
                    <h3 className='font-bold px-32 py-16 text-3xl text-center pt-8'>
                        Lorem ipsum dolor sit,  neque sed dolores obcaecati maiores ducimus ipsum possimus ipsam!
                    </h3>
                </div>
                <div className='w-1/2'>
                    <img src={kid} alt="" />
                    {/* <video src=""></video> */}
                </div>
            </div>

            <div  className='bg-zinc-800 h-3  w-screen '>&nbsp;</div>

            <div className='flex w-full bg-black p-12 text-white flex-col'>
            <h1 className='font-extrabold text-6xl w-full text-center pb-16'>
                    Frequently Asked Questions
                    </h1>
                    {
                        netflixDesc.map((elem, i)=>(
                            <DropdownDetails key={i} title={elem.title} desc={elem.desc} />
                        ))

                    }
            </div>
            <div className='flex z-20 gap-2 text-white my-4'>
            <input type="text" placeholder='Email address' className='bg-black opacity-50 font-semibold min-w-96  p-4 border-2 rounded-md ' />
            <button style={{backgroundColor:'#ff0000'}} className='px-16 bg-red-600 font-semibold text-2xl rounded-md'>Get Started ❯ </button>
           </div>
            </div>
        </div>
    )
}

export default Home