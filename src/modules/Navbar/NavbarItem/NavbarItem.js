import React from 'react';
import s from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({title, link}) => {
    return (
        <NavLink to={link} className={s.asideBlock}>
            <svg className={s.icon}>
                <use xlinkHref={`img/icons.svg#${title.toLowerCase().replace(/ /g, '_')}`} />
            </svg>
            {/*<p className={s.item}>{title}</p>*/}
        </NavLink> 
    );
}

export default NavbarItem;