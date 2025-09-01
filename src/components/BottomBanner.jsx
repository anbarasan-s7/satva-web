import React from 'react'
import { assets, features } from '../assets/img/assets';

const BottomBanner = () => {
  return (
    <div className='relative   mt-24'>
    
            <img src={assets.bottom_banner_bg} alt="banner" className='w-full hidden h-110 md:block rounded-lg' />
            <img src={assets.bottom_banner_bg_sm} alt="banner" className='w-full md:hidden rounded-lg'/>
        
        <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-12 md:pt-0 md:pr-24'>
            <div className='sm:text-3xl '>
                <h1 className='text-3xl md:text-4xl front-semibold text-primary-600 md:mb-10 '>
                    Why We Are the Best?
                </h1>
                {features.map((feature,index)=>(
                    <div key={index} className='flex items-center gap-4 mt-3'>
                        <img src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
                        <div>
                        <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                        <p className='text-gray-500/100 text-xs md:text-sm'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BottomBanner;