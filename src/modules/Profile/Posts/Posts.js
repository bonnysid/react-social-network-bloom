import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import PostForm from "../../PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const Posts = ({posts, newPostText, dispatch, joinedUser}) => {

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
                <PostForm
                    title='posts'
                    placeholderBtn='Post'
                    id={1} dispatch={dispatch}
                    newPostText={newPostText}
                    addDataActionCreator={addPostActionCreator}
                    authorInfo={joinedUser}
                    updateInputFieldTextActionCreator={updateNewPostTextActionCreator}
                />
            </section>
            <section className={s.posts}>
                {postElements}
            </section>
        </>
    );
}

export default Posts;