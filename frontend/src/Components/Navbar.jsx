import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='py-5 px-0 flex justify-between items-center '>
        <img src={assets.logo} alt="" className='w-[150px]'/>
        <ul className='flex list-none gap-5 text-[#49557e] text-[18px]'>
            <li onClick={()=>setMenu("home")} className={`cursor-pointer ${menu==="home"?"pb-[2px] border-b-2 border-[#49557e]":""}`}>home</li>
            <li onClick={()=>setMenu("menu")} className={`cursor-pointer ${menu==="menu"?"pb-[2px] border-b-2 border-[#49557e]":""}`}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={`cursor-pointer ${menu==="mobile-app"?"pb-[2px] border-b-2 border-[#49557e]":""}`}>mobile-app</li>
            <li onClick={()=>setMenu("contact us")} className={`cursor-pointer ${menu==="contact us"?"pb-[2px] border-b-2 border-[#49557e]":""}`}>contact us</li>
        </ul>
        <div className='flex items-center gap-[40px]'>
            <img src={assets.search_icon} alt="" />
            <div className="relative">
                <img src={assets.basket_icon} alt="" />
                <div className='absolute min-w-[10px] min-h-[10px] bg-amber-600 rounded-[5px] top-[-8px] right-[-8px]'></div>
            </div>
            <button className='bg-transparent text-base text-[#49557e] border-[1px] border-solid border-amber-600 py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar