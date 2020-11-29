import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import PostForm from "../../PostForm";

const Posts = ({posts}) => {

    const postElements = posts.map(post => (
        <Post
            id={post.id}
            author={post.author}
            comment={post.comment}
            likeCount={post.likeCount}
        />
    ));

    return (
        <>
            <section className={`${s.content} block`}>
                <PostForm onPost={() => alert(1)} title='posts' placeholderBtn='Post' id={1} />
            </section>
            <section className={s.posts}>
                {postElements}
            </section>
        </>
    );
}

export default Posts;