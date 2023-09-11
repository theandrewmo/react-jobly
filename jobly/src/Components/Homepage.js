import React from "react";
import { useUserContext } from "../UserContext";

/** Homepage
 * 
 * props:
 * 
 * state: 
 * 
 */

const Homepage = () => {

    const { currentUser } = useUserContext();

    return (
        <>
            {currentUser ? (
                <>
                    <h3>Welcome back {currentUser.username}!</h3>
                    <p>Search for companies or jobs.</p>
                    <p>Current Applications: [ {currentUser.applications.map(app => (<span key={app}>{`${app} `}</span>))} ]</p>
                </>
            ) : (
                <>
                    <div className=''>
                        <h1>Welcome to Jobly!</h1>
                        <h2>Get...</h2>
                        <h3>Hired...</h3>
                        <h4>Faster</h4>
                    </div> 
                </>
            )}
        </>
    )
}

export default Homepage;