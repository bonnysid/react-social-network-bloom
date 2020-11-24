import React from 'react';
import s from './Description.module.css';

const Description = () => {
    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>Nikita Bortsov</h1>
                <p className={s.status}>inst: bonnysid</p>
                <div className="underline"></div>
            </div>
            <section className={s.about}>
                <div className={s.item}>Instagram: <a href="https://instagram.com/bonnysid" className={s.link}>bonnysid</a></div>
                <div className={s.item}>Github: <a href="https://github.com/bonnysid" className={s.link}>bonnysid</a></div>
            </section>
        </main>
    );
}

export default Description;