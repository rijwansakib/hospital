
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Header.css'

const Heder = () => {
    const {user,logOut}=useAuth();
    return (
        <div className=" ">
           <Navbar  bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-primary font-weight-bold fs-3" href="/home">XYZ General Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/doctors">Doctors</Nav.Link>
                        <Nav.Link href="/about">About </Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        
                    <span className=" font-weight-bold text-uppercase font-italic my-auto">{user.displayName}</span>

                    {
                        user.photoURL?
                        <img className="user-photo mx-3" src={user.photoURL} alt="" />
                        :
                        <div></div>
                    }
                    
                    {
                        user.email?
                        <button className="btn btn-warning  mx-4" onClick={logOut}>log Out</button>
                        :
                        <NavLink className="btn btn-warning" to="/login">Sign In</NavLink>
                    }

                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Heder;