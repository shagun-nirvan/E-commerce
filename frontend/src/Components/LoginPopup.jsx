import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='absolute z-[1] w-full h-full bg-[#00000090] grid'>
        <form action="" style={{animation : 'fadeIn 0.5s'}} className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px]">
            <div className="flex justify-between items-center text-black">
                <h2 className='text-3xl'>{currState}</h2>
                <img className='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="flex flex-col gap-[20px]">
              {currState==="Login"?<></>:<input className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]' type="text" placeholder='Your name' required/>}
              
              <input className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]' type="email" placeholder='Your email' required/>
              <input className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]' type="password" placeholder='Password' required />
            </div>
              <button className='border-none p-[10px] rounded-[4px] text-white bg-amber-700 text-[15px] cursor-pointer'>{currState==="Sign Up"?"Create account":"Login"}</button>
              <div className="flex items-start gap-[8px] mt-[-15px]">
                <input className='mt-[5px]' type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
              </div>
              {currState==="Login"
              ?<p>Create a new account? <span className='text-amber-700 font-medium cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span className='text-amber-700 font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
              
              
            
        </form>
    </div>
  )
}

export default LoginPopup