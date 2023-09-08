import React, { createContext, useContext, useState, useEffect } from 'react';
import JoblyApi from './api';
import jwtDecode from 'jwt-decode';

/** UserContext */

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider( {children} ) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true); 

  console.log('inside context', currentUser)

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const username = decodedToken.username;

      JoblyApi.setToken(token);

      const fetchUserDetails = async () => {
        try {
          const user = await JoblyApi.getUserDetails(username);
          setCurrentUser(user);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false); 
        }
      };

      // Check if currentUser is already available (e.g., from local storage)
      if (!currentUser) {
        fetchUserDetails();
      } else {
        setLoading(false); // If currentUser is available, no need to fetch
      }
    } else {
      setLoading(false); // If there's no token, set loading to false
    }
  }, [token]);

  const value = {
    currentUser, 
    setCurrentUser, 
    token, 
    setToken
  }

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
