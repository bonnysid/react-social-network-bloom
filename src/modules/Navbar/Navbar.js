import React from 'react';
import s from './Navbar.module.css';
import NavbarItem from './NavbarItem';

const Navbar = () => {
    return (
        <nav className={`${s.nav_menu} block`}>
            <NavbarItem title='My Profile' link='profile'/>
            <NavbarItem title='Messages'/>
            <NavbarItem title='News'/>
            <NavbarItem title='Friends'/>
            <NavbarItem title='Music'/>
            <NavbarItem title='Settings'/>
        </nav>       
    )
}

export default Navbar;