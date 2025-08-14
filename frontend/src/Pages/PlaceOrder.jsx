import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="w-full max-w-[max(30%,500px)]">
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className="flex gap-[10px]">
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='First Name'/>
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text"  placeholder='Last Name'/>
        </div>
        <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="email" placeholder='Email address'/>
        <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='Street'/>
        <div className="flex gap-[10px]">
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='City'/>
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text"  placeholder='State'/>
        </div>
        <div className="flex gap-[10px]">
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='Zip Code'/>
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text"  placeholder='Country'/>
        </div>
        <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='Phone'/>
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
         <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className='text-3xl'>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555] ">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-[0px]' />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>₹{50}</p>
            </div>
            <hr className='my-[10px] mx-[0px]' />
            <div className="flex justify-between text-[#555] mb-[4px]">
              <b>Total</b>
              <b>₹{getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button  className='border-none text-white bg-amber-600 w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer'>PROCEED TO PAY</button>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder