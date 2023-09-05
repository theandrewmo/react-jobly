import React from "react";
import { useUserContext } from "../UserContext";

/** Profile
 * 
 * props:
 * 
 * state: 
 * 
 */

const Profile = () => {

    const { currentUser } = useUserContext();
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