import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg" alt='bgImg'/>
        </div>
    
        <form className="w-3/12 absolute p-12 bg-black bg-opacity-85 my-36 text-white mx-auto right-0 left-0">
            <h1 className='font-bold text-3xl'>{isSignIn? "Sign In" : "Sign Up"}</h1>

         {!isSignIn && <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            type='email' 
            placeholder='Full Name'/>}

            <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            type='email' 
            placeholder='Email or Phone Number'/>

            <input className='p-4 my-4 w-full  bg-gray-700 rounded-lg' 
            type='password' 
            placeholder='Password'/>

            <button className='p-2 my-4 w-full bg-red-600 text-white rounded-lg'>
                Sign In
                </button>

                <p className='py-4' onClick={toggleSignInForm}>{isSignIn? "New to Netflix?Sign up now." : "Already a user. Sign in"}</p>
        </form>
        </div>
    
  )
}

export default Login
