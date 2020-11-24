import React from 'react';
import s from './Posts.module.css';
import Post from './Post';

const Posts = () => {

    const postsData = [
        {id: 1, author: 'Nikita Bortsov', comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', likeCount: 90},
        {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
    ]

    return (
        <>
            <section className={`${s.content} block`}>
                <div className={s.header}>
                    <h1 className={s.title}>posts</h1>
                </div>
            </section>
            <section className={s.posts}>
                {postsData.map(post => (
                    <Post
                        id={post.id}
                        author={post.author}
                        comment={post.comment}
                        likeCount={post.likeCount}
                    />
                ))}
            </section>
        </>
    );
}

export default Posts;