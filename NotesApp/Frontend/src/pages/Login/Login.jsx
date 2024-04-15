import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../Components/Input/PasswordInput';
import {validateEmail} from '../../utils/helper'

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("")
    const [error , setError] = useState(null)


    const handleLogin = async (e) =>{
      e.preventDefault();
      
      if (!validateEmail(email)){
        setError("Please Enter valid email address")
        return;
      }
      if (!password){
        setError("Please enter the password")
        return;
      }
      setError('')

      //Login api
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center mt-28 '>


                <div className='w-96 rounded border px-7 py-12'>
                    <form onSubmit={handleLogin}>
                        <h4 className='text-2xl mb-7 text-center font-medium'>Login</h4>

                        <input type="text" placeholder='Email' className='input-box'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        />

                        <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

                        <button className='btn-primary'>
                            Login
                        </button>
                        <p className='text-sm text-center mt-4'>Not Registered yet?{"  "} <Link to="/signup" className='font-medium text-primary underline'>Create new Account</Link></p>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login