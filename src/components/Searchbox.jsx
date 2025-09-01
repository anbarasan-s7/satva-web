import React from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/img/assets';

const Searchbox = () => {
    const {setSearchQuery} =useAppContext();

  return (
    <div>
        {/* {----duplicate Search bar} */} 
          <div className="border border-gray-300 flex justify-between items-center  md:hidden lg:hidden xl:hidden px-3 rounded-full mt-10">
          {/* <div className=" lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full"> */}
            <input
              onChange={(e)=>setSearchQuery(e.target.value)}
              className="py-1.5 w-xs bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img src={assets.search_icon} alt="search" className="w-4 h-4 " />
          </div>
    </div>
  )
}

export default Searchbox