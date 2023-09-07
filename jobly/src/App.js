import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import NavBar from './NavBar';
import JoblyApi from './api';
import jwtDecode from 'jwt-decode';
import { useUserContext } from './UserContext';

/** App
 * 
 * props: none
 * 
 * state: none
 * 
 */

function App() {

  const { currentUser, setCurrentUser, token, setToken } = useUserContext();

  const login = async (username, password) => {
      const result = await JoblyApi.getUserToken(username, password);
      if (result.error) {
        return {error: result.error}
      }
      localStorage.setItem('token', result);
      setToken(result);
      return 'success';
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCurrentUser(null);
  }

  const signup = async (username, password, firstName, lastName, email) => {
    const result = await JoblyApi.register(username, password, firstName, lastName, email);
    if (result.error) {
      return {error: result.error}
    }
    localStorage.setItem('token', result);
    setToken(result);
    return 'success';
  }

  useEffect(()=> {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const decodedToken = jwtDecode(storedToken);
      const username = decodedToken.username;

    // Set the token in the JoblyApi class before making the request
    JoblyApi.setToken(storedToken);

    const fetchUserDetails =  async () => {
      try {
            if (storedToken) {
              const user = await JoblyApi.getUserDetails(username);
              setCurrentUser(user);
            }
          } catch(e) {
              console.error(e);
            }
    }
    fetchUserDetails(); 
    }
  }, [token])

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Router login={login} logout={logout} signup={signup}/>
        </BrowserRouter>
    </div>
  );
}

export default App;


