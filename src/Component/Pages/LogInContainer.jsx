import React from 'react'
import { Link } from 'react-router-dom'

function LogInContainer() {
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center shadow-md rounded-sm'>
        <form className='bg-slate-200 w-2/6 flex flex-col py-10 px-5 shadow-lg rounded-sm'>
            <h1 className='text-2xl font-bold text-center'>Log In</h1>
            <label htmlFor="email" className='py-2'>Email<span className='text-red-800'>*</span></label>
            <input type="text" id="email" name="email" placeholder='Please enter the your email' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="password" className='py-2'>Password<span className='text-red-800'>*</span></label>
            <input type="text" id="password" name="password" placeholder='34223#@83' className='py-1 px-2 rounded-sm'/>
            <button className='bg-blue-500 py-1.5 rounded-md my-5'>Log In</button>
            <p>Don't have an account? <Link to={'/auth/signIn'} className='text-blue-500'>SignIn</Link></p>
        </form>
    </div>
  )
}

export default LogInContainer
