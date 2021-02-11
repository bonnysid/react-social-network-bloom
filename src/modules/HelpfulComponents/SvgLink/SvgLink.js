import React from 'react';
import s from './SvgLink.module.css';
import { NavLink } from 'react-router-dom';
import icons from '../../../assets/img/icons.svg';

const SvgLink = ({title, link, isExit, className, svgClassName, ...props}) => {
    return (
        <NavLink {...props} title={title} to={link} className={ className ? className : s.asideBlock + (isExit ? " " + s.exit : "")}>
            <svg className={svgClassName ? svgClassName : s.icon + (isExit ? " " + s.exit_icon : "")}>
                <use xlinkHref={`${icons}#${title.toLowerCase().replace(/ /g, '_')}`} />
            </svg>
        </NavLink> 
    );
}

export default SvgLink;