import React from 'react';
import s from './NavbarItem.module.css';

const NavbarItem = ({title}) => {
    return (
        <a href={`/${title.toLowerCase().replace(/ /g, '_')}`} className={s.asideBlock}>
            <svg className={s.icon}>
                <use xlinkHref={`img/icons.svg#${title.toLowerCase().replace(/ /g, '_')}`} />
            </svg>
            <p className={s.item}>{title}</p>
        </a> 
    );
}

export default NavbarItem;