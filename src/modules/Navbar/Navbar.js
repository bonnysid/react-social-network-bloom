import React from 'react';
import s from './Navbar.module.css';
import SvgLink from '../HelpfulComponents/SvgLink';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import {setHeaderTitle} from "../../redux/navbarReducer";

const Navbar = ({items, setHeaderTitle}) => {
    const menuElements = items.map((item, id) => (<SvgLink setHeaderTitle={setHeaderTitle} key={id} title={item.title} link={item.link}/>));

    return (
        <nav className={`${s.block}`}>
            <NavLink to='/' className={`${s.logo}`}>
                <img src={logo} className={`${s.logo__img}`} alt='logo' />
            </NavLink>

            <div className={s.main__nav}>
                {menuElements}
            </div>

            <SvgLink title={'exit'} link={'/'} isExit={true} urlId={'exit'}/>

        </nav>       
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.navbar.menuItems
    }
}

const NavbarContainer = connect(mapStateToProps, {setHeaderTitle})(Navbar);


export default NavbarContainer;