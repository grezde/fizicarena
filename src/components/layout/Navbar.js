import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">
                    <img src="favicon.png" width="30" height="30" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarLinks">
                    <div className="nav navbar-nav mr-auto">
                        <NavLink to="/archive" className="nav-item nav-link">Archive</NavLink>
                        <NavLink to="/contests" className="nav-item nav-link">Contests</NavLink>
                    </div>
                    <div className="nav navbar-nav">
                        <a className="nav-item nav-link">Log out </a> 
                        <NavLink to="/account" className="nav-item nav-link">Account </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;