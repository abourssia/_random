import React from 'react'
import cakeImg from '../assets/bake.jpg'
import Carousel from "../components/Carousel";
import { AiFillCaretRight
} from "react-icons/ai";

const Lastest = () => {
  return (
      
    <div name="Ourlatest" className='w-full py-20 shadow-lg py-y px-2 bg-zinc-200  flex zigzag'>
        <div className='text-center'>
            <h2 className='text-6xl  skintone-text place skintone-text tilda-petite'> Our Latest </h2>
            <p  className='py-5 text-3xl md:text-sm italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore recusandae omnis enim!</p>
        </div>
        <div className=' max-w-[1240px] mx-auto grid grid-col-1 justify-between gap-12 relative pt-8 px-8 md:grid-cols-3 py-8'>
        <div className="mb-4 relative  w-80 h-80  overflow-hidden">
                <img src={cakeImg} className='object-cover w-full h-full latestimg' alt="" />
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0  bg-blue-400/70 
                text-white text-xs text-center leading-4 hover:py-5">More Details 
                </div>

        </div>
        <div className="mb-4 relative  w-80 h-80  overflow-hidden">
                <img src={cakeImg} className='object-cover w-full h-full latestimg' alt="" />
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0  bg-blue-400/70 
                text-white text-xs text-center leading-4 hover:py-5">More Details 
                </div>

        </div>
        <div className="mb-4 relative  w-80 h-80  overflow-hidden">
                <img src={cakeImg} className='object-cover w-full h-full latestimg' alt="" />
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0  bg-blue-400/70 
                text-white text-xs text-center leading-4 hover:py-5">More Details 
                </div>

        </div>
          
      </div>
    </div>
  )
}

export default Lastest
