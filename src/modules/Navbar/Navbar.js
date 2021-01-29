import React from 'react';
import s from './Navbar.module.css';
import SvgLink from './SvgLink';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Navbar = ({items}) => {
    const menuElements = items.map((item, id) => (<SvgLink key={id} title={item.title} link={item.link}/>));

    return (
        <nav className={`${s.block}`}>
            <NavLink to='/' className={`${s.logo}`}>
                <img src='img/logo.svg' className={`${s.logo__img}`} alt='logo' />
            </NavLink>

            <div className={s.main__nav}>
                {menuElements}
            </div>

            <SvgLink title={'exit'} link={'/'} isExit={true}/>

        </nav>       
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.navbar.menuItems
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);


export default NavbarContainer;