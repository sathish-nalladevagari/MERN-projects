import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PasswordInput from '../../Components/Input/PasswordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'

const SignUp = () => {
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [error , setError] = useState(null)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        if(!username){
            setError("Please enter username")
            return;
        }
        if(!validateEmail(email)){
            setError("Please enter valid email")
            return;
        }
        if(!password){
            setError("Please enter Password")
            return;
        }

        setError("")

        //Signup api call

    }
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border px-7 py-12 rounded text-center'>
            <form onSubmit={handleSubmit}>
                <h4 className='font-medium text-xl mb-4 '>SignUp</h4>

                <input 
                placeholder='Username'
                className='input-box'
                type='text'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />

                <input 
                placeholder='Email'
                className='input-box'
                type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                
                <PasswordInput
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

                <button className='btn-primary'>
                    SignUp
                </button>
                <p className='text-sm text-center mt-4'>Already Registered?{"  "} <Link to="/login" className='font-medium text-primary underline'>Login</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUp