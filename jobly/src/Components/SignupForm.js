import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

/** SignupForm
 * 
 * props: signup 
 * 
 * state: usernameInput, passwordInput, firstNameInput, lastNameInput, emailInput
 * 
 */

const SignupForm = ( {signup} ) => {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const {value} = e.target;
        setUsernameInput(value);
    }

    const handlePasswordChange = (e) => {
        const {value} = e.target;
        setPasswordInput(value);
    }

    const handleFirstNameChange = (e) => {
        const {value} = e.target;
        setFirstNameInput(value);
    }

    const handleLastNameChange = (e) => {
        const {value} = e.target;
        setLastNameInput(value);
    }

    const handleEmailChange = (e) => {
        const {value} = e.target;
        setEmailInput(value);
    }

    const handleSignupFormSubmit = async (e) => {
        e.preventDefault();
        const result = await signup(usernameInput, passwordInput, firstNameInput, lastNameInput, emailInput);
        if (result !== 'success') {
            alert(result.error)
        }
        else {
            alert('success')
            setUsernameInput('');
            setPasswordInput('');
            setFirstNameInput('');
            setLastNameInput('');
            setEmailInput('');
            navigate('/');
        }
    }

    return (
        <>
        <h2>Signup Form</h2>
        <form onSubmit={handleSignupFormSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type='text' name='username' onChange={handleUsernameChange} value={usernameInput}></input>
            </div>
            <div>
                <label htmlFor="username">Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange} value={passwordInput}></input>
            </div>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type='text' name='firstName' onChange={handleFirstNameChange} value={firstNameInput}></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type='text' name='lastName' onChange={handleLastNameChange} value={lastNameInput}></input>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type='text' name='email' onChange={handleEmailChange} value={emailInput}></input>
            </div>
            <button>Signup</button>
        </form>
        </>
    )
}

export default SignupForm;