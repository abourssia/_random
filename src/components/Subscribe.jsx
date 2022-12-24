import React from 'react'
import {MailIcon} from '@heroicons/react/solid'
const Subscribe = () => {
  return (
    <div className='w-full mt-24 mb-12 pb-12 bg-slate-200 border shadow-lg'>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-black uppercase text-center'> Subscribe </h2>
                <p className='mt-5 text-gray-600 text-center'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iure voluptatem suscipit blanditiis error enim repellat cum, culpa a, voluptates aliquid ab provident? Assumenda neque expedita ipsa non, obcaecati voluptates?</p>
            </div>        
            <div className="relative text-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MailIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                        </div>                       
                        <input type="text" id="email-address-icon"
                         className="bg-gray-50 border border-gray-300 
                         text-gray-900 text-sm rounded-lg focus:ring-blue-500
                          focus:border-blue-500 block w-full pl-10 p-2.5  
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           placeholder="name@mail.com"/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe