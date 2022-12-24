import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full py-36'>
    <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'> ABOUT US </h2>
            <p className='text-3xl py-6 text-gray-500'> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 mr-5 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-orange-500'>69%</p>
                <p className='text-gray-400 mt-2'> Shitty </p>   
            </div>
            <div className='border py-8 mr-5 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-orange-500'>24/7</p>
                <p className='text-gray-400 mt-2'> Shitty </p>   
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-orange-500'>6900</p>
                <p className='text-gray-400 mt-2'> Shitt </p>   
            </div>
        </div>
    </div>
</div>
  )
}

export default About