import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useUserContext } from "./UserContext";


const NavBar = () => {

    const { currentUser } = useUserContext(); 

    return (
        <>
            <Navbar expand='md' color='light'>
                <NavLink to='/' className='navbar-brand'>
                    Jobly
                </NavLink>
                <Nav className='ml-auto' navbar>
                {!currentUser ? (
                    <>
                        <NavItem>
                            <NavLink to='/login' className='nav-link'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/signup' className='nav-link'>Signup</NavLink>
                        </NavItem>
                    </>    
                ) : (
                    <>
                    <NavItem>
                        <NavLink to='/companies' className='nav-link'>Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/jobs' className='nav-link'>Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/profile' className='nav-link'>Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/logout' className='nav-link'>Logout</NavLink>
                    </NavItem>
                    </>
                )}
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;