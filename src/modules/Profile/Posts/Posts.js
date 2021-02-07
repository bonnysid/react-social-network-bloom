import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import InputPostForm from "./PostsForm";
import {reset} from "redux-form";

const Posts = ({posts, addPost, joinedUser, reset}) => {

    const onAddPost = ({message}) => {
        reset('posts');
        addPost(joinedUser, message);
    }

    return (
        <>
            <section className={`${s.content} block`}>
                <InputPostForm onSubmit={onAddPost}/>
            </section>
            <section className={s.posts}>
                {posts}
            </section>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        joinedUser: state.users.joinedUser,
        posts: state.profilePage.posts.map(post => (
            <Post
                id={post.id}
                author={post.author}
                comment={post.comment}
                likeCount={post.likeCount}
                key={post.id}
            />
        )),
    };
};

const PostsContainer = connect(mapStateToProps, {addPost, reset})(Posts);

export default PostsContainer;