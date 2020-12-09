import React from 'react';
import s from './Post.module.css';

const Post = ({author, comment, likeCount}) => {
    const date = new Date();

    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <div className={s.avatar}>
                    <img className={s.image} src="https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg" alt="avatar"/>
                </div>
                <div className={s.header__info}>
                    <h2 className={s.author}>{author}</h2>
                    <time className={s.date}>{date.toDateString()}</time>
                </div>
            </div>
            
            <p className={s.comment}>{comment}</p>
            <div className="underline"></div>
            <section className={s.footer}>
                    <svg className={s.icon}>
                        <use xlinkHref={`img/icons.svg#like`} />
                    </svg>
                    <p className={s.count}>{likeCount}</p>

            </section>
        </main>
    );
}

export default Post;