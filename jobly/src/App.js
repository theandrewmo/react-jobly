import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import NavBar from './NavBar';
import JoblyApi from './api';
import { useUserContext } from './UserContext';

/** App
 * 
 * props: none
 * 
 * state: none
 * 
 */

function App() {

  const { setCurrentUser, setToken } = useUserContext();

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

  const edit = async (username, password, firstName, lastName, email) => {
    const result = await JoblyApi.editUser( username, password, firstName, lastName, email);
    if (result.error) {
      return {error: result.error}
    }
    return 'success';
  }

  const apply = async (username, jobId) => {
    const result = await JoblyApi.applyToJob( username, jobId);
    if (result.error) {
      return {error: result.error}
    }
    return 'success';
  }

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Router login={login} logout={logout} signup={signup} edit={edit} apply={apply}/>
        </BrowserRouter>
    </div>
  );
}

export default App;


