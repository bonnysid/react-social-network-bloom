import React from 'react';
import s from './Navbar.module.css';
import SvgLink from '../common/SvgLink';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import {setHeaderTitle} from "../../redux/reducers/navbarReducer";
import {logout} from "../../redux/reducers/authReducer";

const Navbar = ({items, setHeaderTitle, logout}) => {
    const menuElements = items.map((item, id) => (<SvgLink onClick={() => setHeaderTitle(item.title)} key={id} title={item.title} link={item.link}/>));

    return (
        <nav className={`${s.block}`}>
            <NavLink to='/' className={`${s.logo}`}>
                <img src={logo} className={`${s.logo__img}`} alt='logo' />
            </NavLink>

            <div className={s.main__nav}>
                {menuElements}
            </div>

            <SvgLink onClick={logout} title={'exit'} link={'/'} isExit={true} urlId={'exit'}/>

        </nav>       
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.navbar.menuItems
    }
}

const NavbarContainer = connect(mapStateToProps, {setHeaderTitle, logout})(Navbar);


export default NavbarContainer;