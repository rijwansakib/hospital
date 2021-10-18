import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Heder = () => {
    return (
        <div className="header">

            <nav className="d-flex justify-content-evenly">
            <Link to="home"><h3 className="text-primary" >XYZ GENAREL HOSPITAL</h3></Link>
                <div className="mx-2">
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                </div>
                <div>
                
                   
                    <button className="btn btn-warning  mx-4">Log Out</button>
                    
                    <NavLink className="btn btn-warning" to="/login">LogIn</NavLink>
                
                  {/* <NavLink to="/inventory"><span className="user-name">{user.displayName}</span></NavLink> */}
                {/* <img className="user-image mx-auto mx-5" src={user.photoURL} alt="" /> */}
                </div>
            </nav>
        </div>
    );
};

export default Heder;