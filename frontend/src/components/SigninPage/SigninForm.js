import React from 'react'

function SigninForm() {
  return (
    <div className=' w-full h-72 bg-white mt-6 flex flex-col items-center justify-center rounded-2xl'>
        <div className='bg-grey w-10/12'> 
            <p className='w-full h-5 font-normal text-base leading-5'>Email address</p>
            <input type="email"     
             className="bg-gray-100 border 
               rounded-lg w-full h-10 px-2 mt-2 outline-none" 
              placeholder="Enter your email address"/>
            <p className='w-full h-5 font-normal text-base leading-5 mt-4 '>Password</p>
            <input type="password"
             className="bg-gray-100 border
               rounded-lg w-full h-10 px-2 mt-2 outline-none" 
              placeholder="Enter your password"/>

             <div className="bg-black border
               rounded-lg w-full h-10 px-2 mt-6 text-white justify-center items-center text-center cursor-pointer">Sign in</div>
        </div>
    </div>
  )
}

export default SigninForm