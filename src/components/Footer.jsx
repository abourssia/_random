import React from 'react'

import {
AiFillFacebook,
AiFillInstagram,
AiOutlineTwitter,
AiFillYoutube

} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full  bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'> Shits </h6>
                <ul>
                    <li className='py-1'>Crap 1 </li>
                    <li className='py-1'>Crap 2</li>
                    <li className='py-1'>Crap 3</li>
                    <li className='py-1'>Crap 4</li>
                    <li className='py-1'>Crap 5</li>
                    <li className='py-1'>Crap 6</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'> Shits </h6>
                <ul>
                    <li className='py-1'>Crap 1 </li>
                    <li className='py-1'>Crap 2</li>
                    <li className='py-1'>Crap 3</li>
                    <li className='py-1'>Crap 4</li>
                    <li className='py-1'>Crap 5</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '> Shits </h6>
                <ul>
                    <li className='py-1'>Crap 1 </li>
                    <li className='py-1'>Crap 2</li>
                    <li className='py-1'>Crap 3</li>
        
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '> Shits </h6>
                <ul>
                    <li className='py-1'>Crap 1 </li>
                    <li className='py-1'>Crap 2</li>
                    <li className='py-1'>Crap 3</li>
                    <li className='py-1'>Crap 4</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'> Subscribe yla bghite sahite !</p>
                <p className='py-4'> Again, yla bghite yaeni, mashi bessif elik !</p>
                <form action="" className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'> Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                 <p className='py-4'>2022. All right reserved to me </p>
                 <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>

                 <AiFillFacebook/>
                 <AiFillInstagram/>
                 <AiOutlineTwitter/>
                 <AiFillYoutube/>
                 </div>
            </div>
    </div>
  )
}

export default Footer
