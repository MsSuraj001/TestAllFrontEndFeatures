import React, { useState } from 'react'
import toast from 'react-hot-toast';
import SignInContaner from './SignInContaner';

function SignIn() {
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
    return(
      <SignInContaner handleFromInput={handleFromInput} handleFromSubmit={handleFromSubmit}/>
    )
}

export default SignIn
