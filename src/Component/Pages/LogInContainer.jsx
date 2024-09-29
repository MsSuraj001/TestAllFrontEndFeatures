import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

function LogInContainer() {
    const [logInState, setLogInState] = useState({
        email : '',
        password : '',
    })

    function handleFromInput(e){
        const {name, value} = e.target;
        setLogInState(prevState => ({...prevState, [name]: value}))
    }
    function handleFromSubmit(e){
        e.preventDefault();
        console.log(logInState);

        if(!logInState.email || !logInState.password){
            toast.error("Please fill the all value in this form");
            return;
        }
        // check email
        if(!logInState.email.includes('@') || !logInState.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }
        if(logInState.password.length < 6 || logInState.password.length > 8){
            toast.error("Password must be between 6 and 8 characters");
            return;
        }
    }
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center shadow-md rounded-sm'>
        <form className='bg-slate-200 w-2/6 flex flex-col py-10 px-5 shadow-lg rounded-sm'>
            <h1 className='text-2xl font-bold text-center'>Log In</h1>
            <label  htmlFor="email" className='py-2'>Email<span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="text" id="email" name="email" placeholder='Please enter the your email' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="password" className='py-2'>Password<span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="text" id="password" name="password" placeholder='34223#@83' className='py-1 px-2 rounded-sm'/>
            <button className='bg-blue-500 py-1.5 rounded-md my-5' onClick={handleFromSubmit}>Log In</button>
            <p>Don't have an account? <Link to={'/auth/signIn'} className='text-blue-500'>SignIn</Link></p>
        </form>
    </div>
  )
}

export default LogInContainer
