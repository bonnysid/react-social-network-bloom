import React from 'react';
import s from './Post.module.css';
import SvgItem from "../../../../components/SvgItem";
import defaultPhoto from '../../../../assets/img/user.png';
import {IUser} from "../../../../interfaces/users-interfaces";
import {IAuthUserInfo} from "../../../../interfaces/auth-interfaces";

interface Props {
    id: number
    author: string
    photo: string | null
    comment: string
    likeCount: number
    date: string
    title: string
    handleDelete: () => void
}

const Post: React.FC<Props> = ({handleDelete, title, photo, author, comment, likeCount, date}) => {

    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <div className={s.block}>
                    <div className={s.avatar}>
                        <img className={s.image}
                             src={photo ? photo : defaultPhoto}
                             alt="avatar"/>
                    </div>
                    <div className={s.header__info}>
                        <h2 className={s.author}>{author}</h2>
                        <time className={s.date}>{date}</time>
                    </div>
                </div>
                <button onClick={handleDelete} className={s.block}>
                    <SvgItem width={'25px'} height={'25px'} className={s.close_btn} urlId={'close'}/>
                </button>
            </div>
            <h2 className={s.title}>{title}</h2>
            <p className={s.comment}>{comment}</p>
            <div className="underline"/>
            <section className={s.footer}>
                {/*<svg className={s.icon}>*/}
                {/*    <use xlinkHref={`img/icons.svg#like`} />*/}
                {/*</svg>*/}
                <SvgItem className={s.icon} urlId={'like'}/>
                <p className={s.count}>{likeCount}</p>

            </section>
        </main>
    );
}

export default Post;
