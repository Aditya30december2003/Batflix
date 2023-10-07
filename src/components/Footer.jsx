import React from 'react'
import {FiFacebook , FiTwitter} from 'react-icons/fi'
import{TiTick} from 'react-icons/ti'

const Bottom = () => {
  return (
    <div className='mt-20 text-white sm:flex sm:items-center mb-10 max-w-[80vw] mx-auto justify-between'>
      <div className='flex justify-between  mb-10 flex-wrap gap-5'>

        <div className='flex flex-col gap-5 text-left mt-4'>
            <h1 className='text-[1.2rem]'>Company</h1>
            <p className='text-white/60 text-[0.9rem]'>About Us</p>
        </div>

        <div className='flex flex-col gap-5 text-left mt-4'>
            <h1 className='text-[1.2rem]'>View Website</h1>
            <p className='text-white/60 text-[0.9rem] flex'>
                <TiTick/>
                English
            </p>
        </div>

        <div className='flex flex-col gap-5 text-left mt-4'>
            <h1 className='text-[1.2rem]'>Need Help?</h1>
            <p className='text-white/60 text-[0.9rem]'>Share Facebook</p>
        </div>

        <div className='flex flex-col gap-5 text-left mt-4'>
          <div>Connect With Us</div>
          <div className='flex justify-around'>
            <button><FiFacebook size={25} /></button>
            <button><FiTwitter  size={25} /></button>
          </div>
        </div>

      </div>
      <div className='font-bold'>Made By Adity Jain</div>
    </div>
  )
}

export default Bottom
