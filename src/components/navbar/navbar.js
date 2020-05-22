import React from 'react'
import 'materialize-css';
import { Navbar } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';

const NavbarContainer = () => {
    return (
        <Navbar
            className="black"
            alignLinks="right"
            brand={<Link className="brand-logo" to="/">
                Search users
            </Link>}
            centerChildren
            id="mobile-nav"
            menuIcon="Menu"
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/info">Information</NavLink>
        </Navbar>
    )
}

export default NavbarContainer;
