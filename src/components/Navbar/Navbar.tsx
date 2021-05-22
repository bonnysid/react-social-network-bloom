import React from 'react';
import s from './Navbar.module.css';
import SvgLink from '../SvgLink';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Navbar: React.FC = (props) => {
    const {menuItems} = useTypedSelector(state => state.navbar)
    const {setHeaderTitle, logout} = useActions()
    const menuElements = menuItems.map((item, id) => (<SvgLink onClick={() => setHeaderTitle(item.title)} key={id} title={item.title} link={item.link}/>));

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

export default Navbar;
