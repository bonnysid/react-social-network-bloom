import React from 'react';
import s from './Photos.module.css';

const Photos = () => {
    return (
        <section className={`${s.content} block`}>
            <h1 className={s.title}>Photos</h1>
            <div className="underline"></div>
            <section className={s.photos}>
                {/* <aside className={s.photos__block}>
                    <img className={s.image} src="https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg" alt="photo"/>
                </aside> */}
            </section>
        </section>
    );
}

export default Photos;