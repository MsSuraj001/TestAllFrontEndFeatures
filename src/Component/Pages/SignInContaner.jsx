import React from 'react'
import { Link } from 'react-router-dom'

function SignInContaner() {
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center '>
        <form className='bg-slate-200 w-2/5 flex flex-col py-10 px-5 shadow-lg rounded-md'>
            <h1 className='text-2xl font-bold text-center'>Sign In</h1>
            <label htmlFor="firstName" className='py-2'>First Name <span className='text-red-800'>*</span></label>
            <input type="text" id="firstName" name="firstName" placeholder='Please enter the first name' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="lastName" className='py-2'>Last Name <span className='text-red-800'>*</span></label>
            <input type="text" id="lastName" name="lastName" placeholder='Please enter the last name' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="email" className='py-2'>Email<span className='text-red-800'>*</span></label>
            <input type="text" id="email" name="email" placeholder='Please enter the your email' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="password" className='py-2'>Password<span className='text-red-800'>*</span></label>
            <input type="text" id="password" name="password" placeholder='34223#@83' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="age" className='py-2'>Age<span className='text-red-800'>*</span></label>
            <input type="number" id="age" name="age" placeholder='Please enter the your age' className='py-1 px-2 rounded-sm'/>
            <button className='bg-blue-500 py-1.5 rounded-md my-5'>Submit</button>
            <p>Alreadt have an account? <Link to={'/auth/logIn'} className='text-blue-500'>logIn</Link></p>
        </form>
    </div>
  )
}

export default SignInContaner
