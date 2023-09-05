import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useUserContext } from "./UserContext";


const NavBar = ( {token} ) => {

    const { currentUser } = useUserContext(); 

    return (
        <>
            <Navbar expand='md'>
                <NavLink to='/' className='navbar-brand'>
                    Jobly
                </NavLink>
                <Nav className='ml-auto' navbar>
                {!currentUser ? (
                    <>
                        <NavItem>
                            <NavLink to='/login'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/signup'>Signup</NavLink>
                        </NavItem>
                    </>    
                ) : (
                    <>
                    <NavItem>
                        <NavLink to='/companies'>Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/jobs'>Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/profile'>Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/logout'>Logout</NavLink>
                    </NavItem>
                    </>
                )}
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;