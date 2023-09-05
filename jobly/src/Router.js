import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import CompaniesList from './Components/CompaniesList';
import JobsList from './Components/JobsList';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import SignupForm from './Components/SignupForm';
import Profile from './Components/Profile';
import Company from './Components/Company';
import Logout from './Components/Logout';

const Router = ( {login, logout, signup} ) => {
    return (
    <> 
    <Routes>
        {/* Homepage — just a simple welcome message */}
        <Route path='/' element={<Homepage />}></Route>

        {/* /companies :List all companies */}
        <Route path='/companies' element={<CompaniesList />}></Route>

        {/* /companies/apple : View details of this company */}
        <Route path='/companies/:handle' element={<Company />}></Route>

        {/* /jobs : List all jobs */}
        <Route path='/jobs' element={<JobsList />}></Route>

        {/* /login : Login/signup */}
        <Route path='/login' element={<Login login={login}/>}></Route>

        {/* /signup : Signup form */}
        <Route path='/signup' element={<SignupForm signup={signup}/>}></Route>

        {/* /profile : Edit profile page */}
        <Route path='/profile' element={<Profile />}></Route>

        {/* /logout : Logout page */}
        <Route path='/logout' element={<Logout logout={logout} />}></Route>

        {/* 404 error */}
        <Route path='/*' element={<NotFound />} />
    </Routes>       
    </> 
    )
}

export default Router;