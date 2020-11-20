import React from 'react';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <section className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.title}>My posts</h1>
                <div className='underline'></div>
            </div>
        </section>
    );
}

export default Posts;