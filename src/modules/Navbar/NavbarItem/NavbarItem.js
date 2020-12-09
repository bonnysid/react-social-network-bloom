import React from 'react';
import s from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({title, link, isExit}) => {
    return (
        <NavLink title={title} to={link} className={s.asideBlock + (isExit ? " " + s.exit : "")}>
            <svg className={s.icon + (isExit ? " " + s.exit_icon : "")}>
                <use xlinkHref={`img/icons.svg#${title.toLowerCase().replace(/ /g, '_')}`} />
            </svg>
            {/*<p className={s.item}>{title}</p>*/}
        </NavLink> 
    );
}

export default NavbarItem;