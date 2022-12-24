import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {CakeIcon, SupportIcon , GiftIcon} from '@heroicons/react/solid'
import supportImg from '../assets/baking.png'

const Services = () => {
  return (
    <div name="Services" className='w-full  pb-12 shadow-md '>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'> Services </h2>
                <h3 className='text-5xl font-bold py-6 text-center'> Eh you'd think so </h3>
                <p className='py-4 text-3xl text-slate-300 text-center' > Aliquam ut pulvinar ante. Quisque malesuada aliquam lacus. Phasellus non est quis tortor lacinia varius quis ac quam. Quisque est leo, pretium vitae ullamcorper quis, egestas ac enim.  </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 
            sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-orange-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'> Service </h3>
                        <p className='text-gray-600 text-xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae reiciendis ex inventore vero nemo expedita enim nulla, aliquid asperiores. Id quaerat nobis, voluptatibus temporibus dolorum corporis vitae dolor eius.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-orange-400'> Get Started <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <CakeIcon className='w-16 p-4 bg-orange-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'> Service 2</h3>
                        <p className='text-gray-600 text-xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae reiciendis ex inventore vero nemo expedita enim nulla, aliquid asperiores. Id quaerat nobis, voluptatibus temporibus dolorum corporis vitae dolor eius.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-orange-400'> Get Started <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <GiftIcon className='w-16 p-4 bg-orange-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'> Service 3 </h3>
                        <p className='text-gray-600 text-xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae reiciendis ex inventore vero nemo expedita enim nulla, aliquid asperiores. Id quaerat nobis, voluptatibus temporibus dolorum corporis vitae dolor eius.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-orange-400'> Get Started <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services