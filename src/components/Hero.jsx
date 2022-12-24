import React from 'react'
import {
    CameraIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import BgImg from '../assets/cake-bg.png'

const Hero = () => {
  return (
      <div name="Home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'> Lorem Ipsum & Aliquam ut pulvinar ante.</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'> Vestibulum maximus  </h1>
                    <p className='text-2xl'> Curabitur blandit, dolor sit amet blandit fringilla, ligula ante lobortis mi</p>
                    <button className='py-3 px-8 sm:w-[60%] my-4 '> Get Started </button>
                </div>
                <div className=''>
                    <img src={BgImg}  className='myimage' alt="" />
                </div>
              
            </div>
      </div>
    )
}

export default Hero