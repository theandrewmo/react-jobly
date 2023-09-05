import React, { useState } from "react";
import { useNavigate } from "react-router";

/** Login
 * 
 * props: login
 * 
 * state: usernameInput, passwordInput
 * 
 */

const Login = ( {login} ) => {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const {value} = e.target;
        setUsernameInput(value);
    }

    const handlePasswordChange = (e) => {
        const {value} = e.target;
        setPasswordInput(value);
    }

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        const result = await login(usernameInput, passwordInput);
        if (result !== 'success') {
            console.error(result.error);
            setUsernameInput('');
            setPasswordInput('');
        }
        else {
            navigate('/');
        } 
    }

    return (
        <>
        <h2>Login Page</h2>
        <form onSubmit={handleLoginFormSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={handleUsernameChange} value={usernameInput}></input>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={handlePasswordChange} value={passwordInput}></input>
            <button>Login</button>
        </form>        
        </>
    )
}

export default Login;