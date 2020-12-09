import React from 'react';
import s from './Navbar.module.css';
import SvgLink from './SvgLink';
import {NavLink} from "react-router-dom";

const Navbar = ({items}) => {
    const menuItems = items.map((item, id) => (<SvgLink title={item.title} link={item.link}/>))

    return (
        <nav className={`${s.block}`}>
            <a href='/' className={`${s.logo}`}>
                <img src='img/logo.svg' className={`${s.logo__img}`} alt='logo' />
            </a>

            <div className={s.main__nav}>
                {menuItems}
            </div>

            <SvgLink title={"exit"} link={"/"} isExit={true}/>

        </nav>       
    )
}

export default Navbar;