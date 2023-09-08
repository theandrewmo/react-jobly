import React, { useState, useEffect } from "react";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";
import JoblyApi from "../api";

/** EditProfile
 * 
 * props: edit
 * 
 * state: 
 * 
 */

const EditProfile = ( {edit} ) => {

    const { currentUser, setCurrentUser } = useUserContext();

    const navigate = useNavigate();

    const [passwordInput, setPasswordInput] = useState('');
    const [firstNameInput, setFirstNameInput] = useState(currentUser?.firstName || '');
    const [lastNameInput, setLastNameInput] = useState(currentUser?.lastName || '');
    const [emailInput, setEmailInput] = useState(currentUser?.email || '');


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

    const handleEditFormSubmit = async (e) => {
        e.preventDefault();
        const result = await edit(currentUser.username, passwordInput, firstNameInput, lastNameInput, emailInput);
        if (result !== 'success') {
            alert(result.error)
        }
        else {
            const updatedUser = await JoblyApi.getUserDetails(currentUser.username);
            setCurrentUser(updatedUser);
            setPasswordInput('');
            setFirstNameInput('');
            setLastNameInput('');
            setEmailInput('');
            navigate('/profile');
        }
    }

    useEffect(() => {
      // Check if currentUser is null and navigate to the profile page if it is
      if (!currentUser) {
        navigate("/profile");
      }
    }, []);
    

    if (!currentUser) return (
      <>
      <p>Loading ...</p>
      </>
    )

    return (
    <>
      <h2>Edit Profile Page</h2>
      <form onSubmit={handleEditFormSubmit}>
            <div>
                <label htmlFor="username">New Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange} value={passwordInput}></input>
            </div>
            <div>
                <label htmlFor="firstName">New First Name: </label>
                <input type='text' name='firstName' onChange={handleFirstNameChange} value={firstNameInput}></input>
            </div>
            <div>
                <label htmlFor="lastName">New Last Name: </label>
                <input type='text' name='lastName' onChange={handleLastNameChange} value={lastNameInput}></input>
            </div>
            <div>
                <label htmlFor="email">New Email: </label>
                <input type='text' name='email' onChange={handleEmailChange} value={emailInput}></input>
            </div>
            <button>Save</button>
        </form>
    </>
  )    
}

export default EditProfile;