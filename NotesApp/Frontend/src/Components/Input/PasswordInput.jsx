import React, { useState } from 'react'
import {FaRegEye , FaRegEyeSlash} from 'react-icons/fa'

const PasswordInput = ({ value , onChange , placeholder }) => {
    const [isshowpassword , setIsShowPassword] = useState(false)

    const togglePassword  = ()=>{
        setIsShowPassword(!isshowpassword)
    }
  return (
   <div className=' flex items-center bg-transparent text-sm border px-5 w-full mb-4 rounded outline-none'>
    <input
    value={value}
    placeholder={placeholder || "Password"}
    type={isshowpassword ? 'text' : 'password'}
    onChange={onChange}
    className='w-full text-sm bg-transparent py-2 mr-3 outline-none'
    
    />
    {isshowpassword ?<FaRegEye
    size={22}
    className='text-primary cursor-pointer'
    onClick={()=> togglePassword()} /> : <FaRegEyeSlash size={22} className='text-slate-500 cursor-pointer'
    onClick={()=>togglePassword()}/>}
    
   </div>
  )
}

export default PasswordInput