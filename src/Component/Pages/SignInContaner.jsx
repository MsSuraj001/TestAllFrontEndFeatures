import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

function SignInContaner({handleFromInput, handleFromSubmit}) {
  const [signInState, setSignInState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
})
function handleFromInput(e){
    const {name, value} = e.target;
    setSignInState({
        ...signInState,
        [name]: value
    })
}

function handleFromSubmit(e){
    e.preventDefault();
    console.log(signInState);

    if(!signInState.firstName || !setSignInState.lastName || !signInState.email || !signInState.password || !signInState.age){
        toast.error("Missing the value Please fill the all value in the form");
        return;
    }

    if(signInState.firstName.length < 5 || signInState.firstName.length > 20) {
        toast.error("First name should be atleast 5 characters long and maximum 20 characters long")
        return;
    }
    if(signInState.lastName.length < 5 || signInState.lastName.length > 20) {
        toast.error("Last name should be atleast 5 characters long and maximum 20 characters long")
        return;
    }

    // check email
    if(!signInState.email.includes('@') || !signInState.email.includes('.')) {
        toast.error("Invalid email address")
        return;
    }
}
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center '>
        <form className='bg-slate-200 w-2/5 flex flex-col py-10 px-5 shadow-lg rounded-md'>
            <h1 className='text-2xl font-bold text-center'>Sign In</h1>
            <label htmlFor="firstName" className='py-2'>First Name <span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="text" id="firstName" name="firstName" placeholder='Please enter the first name' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="lastName" className='py-2'>Last Name <span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="text" id="lastName" name="lastName" placeholder='Please enter the last name' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="email" className='py-2'>Email<span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="text" id="email" name="email" placeholder='Please enter the your email' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="password" className='py-2'>Password<span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="text" id="password" name="password" placeholder='34223#@83' className='py-1 px-2 rounded-sm'/>
            <label htmlFor="age" className='py-2'>Age<span className='text-red-800'>*</span></label>
            <input onChange={handleFromInput} type="number" id="age" name="age" placeholder='Please enter the your age' className='py-1 px-2 rounded-sm'/>
            <button className='bg-blue-500 py-1.5 rounded-md my-5' onClick={handleFromSubmit}>Submit</button>
            <p>Alreadt have an account? <Link to={'/auth/logIn'} className='text-blue-500'>logIn</Link></p>
        </form>
    </div>
  )
}

export default SignInContaner
