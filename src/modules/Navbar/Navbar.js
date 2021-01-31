import React from 'react';
import s from './Navbar.module.css';
import SvgLink from '../HelpfulComponents/SvgLink';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Navbar = ({items}) => {
    return (
        <nav className={`${s.block}`}>
            <NavLink to='/' className={`${s.logo}`}>
                <img src='img/logo.svg' className={`${s.logo__img}`} alt='logo' />
            </NavLink>

            <div className={s.main__nav}>
                {items}
            </div>

            <SvgLink title={'exit'} link={'/'} isExit={true}/>

        </nav>       
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.navbar.menuItems.map((item, id) => (<SvgLink key={id} title={item.title} link={item.link}/>))
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);


export default NavbarContainer;