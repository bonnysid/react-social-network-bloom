import React from 'react';
import s from './Navbar.module.css';
import NavbarItem from './NavbarItem';

const Navbar = ({items}) => {
    const menuItems = items.map((item, id) => (<NavbarItem title={item.title} link={item.link}/>))

    return (
        <nav className={`${s.nav_menu} block`}>
            {menuItems}
        </nav>       
    )
}

export default Navbar;