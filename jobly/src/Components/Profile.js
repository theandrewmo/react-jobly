import React, { useEffect } from "react";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router";

/** Profile
 * 
 * props:
 * 
 * state: 
 * 
 */

const Profile = () => {

    const { currentUser } = useUserContext();

    const navigate = useNavigate();

    useEffect(() => {
      // Check if currentUser is null and navigate to the homepage if it is
      if (currentUser === null) {
        navigate("/");
      }
    }, [currentUser, navigate]);
    
    return (
    <>
      <h2>Profile Page</h2>
      <p>{currentUser.username}</p>
      <p>{currentUser.firstName}</p>
      <p>{currentUser.lastName}</p>
      <p>{currentUser.email}</p>
    </>
  )    
}

export default Profile;