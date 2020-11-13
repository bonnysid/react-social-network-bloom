import React from 'react';
import './navMenu.css';

const NavMenu = () => {
    return (
        <nav className='nav-menu'>
            <div className="nav-menu__item">Messeges</div>
            <div className="nav-menu__item">Feed</div>
            <div className="nav-menu__item">Music</div>
            <div className="nav-menu__item">Settings</div>
        </nav>       
    )
}

export default NavMenu;