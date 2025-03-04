import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
            <h2 className='text-lg'>Find cars for sale or rent near you</h2>
            <h2 className='text-[40px] font-bold'>Find you dream car</h2>
            <Search/>
            <img src="/chr.png" className='w-[500px]' alt="" />
        </div>
    </div>
  )
}

export default Hero