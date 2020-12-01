import React from 'react';
import s from './Navbar.module.css';
import NavbarItem from './NavbarItem';

const Navbar = ({items}) => {
    const menuItems = items.map((item, id) => (<NavbarItem title={item.title} link={item.link}/>))

    return (
        <nav className={`${s.block}`}>
            <a href='/' className={`${s.logo} container`}>
                <img src='#' className={s.logo__img} alt='logo'></img>
                <h1 className={s.logo__text}>Bloom</h1>
            </a>
            {menuItems}
        </nav>       
    )
}

export default Navbar;