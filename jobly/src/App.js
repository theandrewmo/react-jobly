import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import NavBar from './NavBar';
import JoblyApi from './api';
import jwtDecode from 'jwt-decode';
import { useUserContext } from './UserContext';

function App() {

  const [token, setToken] = useState('');

  // Use the useUserContext hook to access the context and setCurrentUser
  const { setCurrentUser } = useUserContext();

  const login = async (username, password) => {
      const result = await JoblyApi.getUserToken(username, password);
      if (result.error) {
        return {error: result.error}
      }
      setToken(result);
      return 'success';
  }

  const logout = () => {
    setToken('');
    setCurrentUser(null);
  }

  const signup = async (username, password, firstName, lastName, email) => {
    const result = await JoblyApi.register(username, password, firstName, lastName, email);
    if (result.error) {
      return {error: result.error}
    }
    setToken(result);
    return 'success';
  }

  useEffect(()=> {
    async function fetchUserDetails () {
      try {
        if (token) {
          const decodedToken = jwtDecode(token);
          const username = decodedToken.username;

          // Set the token in the JoblyApi class before making the request
          JoblyApi.setToken(token);

          const user = await JoblyApi.getUserDetails(username);
          setCurrentUser(user);
        }
      } catch(e) {
        console.error(e);
      }
    }
    fetchUserDetails(); 
  }, [token])

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar token={token} />
            <Router token={token} login={login} logout={logout} signup={signup}/>
        </BrowserRouter>
    </div>
  );
}

export default App;


