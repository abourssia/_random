import React , {useState} from 'react'
import {MenuIcon, XIcon, LoginIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {

    const [nav, setNav]  = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
  return (

    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'> 

        <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center navbar'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl mlogo'  > Ameena.</h1>
                    <ul className='hidden md:flex nav-items'>
                        <li className="nav-item"> 
                        <Link activeClass="active" to="Home" smooth={true} duration={500}>
                        Home
                        </Link>    
                         </li>
                         <li className="nav-item"> 
                        <Link activeClass="active" to="About" smooth={true} offset={-110} duration={500}>
                        About Us
                        </Link>    
                         </li>
                         <li className="nav-item"> 
                        <Link activeClass="active" to="Services" smooth={true} offset={-150} duration={500}>
                        Services
                        </Link>    
                         </li>
                      
                         <li className="nav-item"> 
                        <Link activeClass="active" to="Ourlatest" smooth={true} offset={-120} duration={500}>
                        Our latest
                        </Link>    
                         </li>
                    
                    </ul>
                </div>       
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>
                        <p className='flex uppercase'> Log in <LoginIcon className='w-5 ml-2'/> </p></button>
                    <button className='px-8 py-3'>  
                        <p className='flex uppercase'>Sign Up</p> </button>
                </div> 

                <div className='md:hidden' onClick={handleClick}>
                    {!nav ?<MenuIcon className='w-5'/>: <XIcon className='w-5'/> }
                </div>
        </div>
                <ul className={!nav? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                    <li className='border-b-2 border-zinc-300 w-full'> 
                    <Link activeClass="active" onClick={handleClose} to="Home" smooth={true} duration={500}>
                        Home
                    </Link>
                    </li>
                    <li className='border-b-2 border-zinc-300 w-full'> 
                    <Link activeClass="active" onClick={handleClose} to="About" smooth={true} offset={-50} duration={500}>
                        About Us
                    </Link>
                    </li>
                    <li className='border-b-2 border-zinc-300 w-full'> 
                    <Link activeClass="active" onClick={handleClose} to="Services" smooth={true} offset={-200} duration={500}>
                        Services
                    </Link>
                    </li>
                
                    <li className='border-b-2 border-zinc-300 w-full'> 
                    <Link activeClass="active" onClick={handleClose} to="Ourlatest" smooth={true} offset={-100} duration={500}>
                    Our latest
                    </Link>
                    </li>
                    <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-orange-600 px-8 py-3 mb-4'> Sign in</button>
                    <button className='px-8 py-3 '> Sign up</button>
                    </div>
                </ul>
    </div>
  )
}

export default Navbar