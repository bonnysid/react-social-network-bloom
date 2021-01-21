import React from 'react';
import s from './SvgLink.module.css';
import { NavLink } from 'react-router-dom';

const SvgLink = ({title, link, isExit, className, svgClassName}) => {
    return (
        <NavLink title={title} to={link} className={ className ? className : s.asideBlock + (isExit ? " " + s.exit : "")}>
            <svg className={svgClassName ? svgClassName : s.icon + (isExit ? " " + s.exit_icon : "")}>
                <use xlinkHref={`img/icons.svg#${title.toLowerCase().replace(/ /g, '_')}`} />
            </svg>
            {/*<p className={s.item}>{title}</p>*/}
        </NavLink> 
    );
}

export default SvgLink;