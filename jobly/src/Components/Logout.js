import React, { useEffect} from "react";
import { useNavigate } from "react-router";

/** Logout
 * 
 * props: logout
 * 
 * state: 
 * 
 */

const Logout = ( {logout} ) => {

    const navigate = useNavigate();

    useEffect(()=> {
        const doLogOut = async () => {
            try {
                await logout();
                navigate('/login');
            } catch(e) {
                console.error(e);
            }
        }
        doLogOut();
    }, []);
    
      
    return (
        <>
            <h2>logging out...</h2>      
        </>
    )
}

export default Logout;