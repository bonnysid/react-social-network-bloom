import React from 'react';
import s from './Footer.module.css';

const Footer = () => (
    <footer className={s.footer}>
        <div className={`containter`}>
            <p className={s.text}>© 2020 BLOOM</p>   
        </div>
    </footer>
);

export default Footer;