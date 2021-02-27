import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={s.container}>
            <img className={s.image} src={preloader}/>
        </div>

    )
}

export default Preloader;