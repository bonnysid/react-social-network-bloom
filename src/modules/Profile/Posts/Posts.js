import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import PostForm from "../../PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const Posts = ({posts, newPostText, addPost, updateNewPostText, joinedUser}) => {
    return (
        <>
            <section className={`${s.content} block`}>
                <PostForm
                    title='posts'
                    placeholderBtn='Post'
                    id={1}
                    newPostText={newPostText}
                    addData={() => addPost(joinedUser)}
                    updateInputFieldText={updateNewPostText}
                />
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
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (joinedUser) => {
            dispatch(addPostActionCreator(joinedUser));
        },
        updateNewPostText: (e) => {
            const text = e.target.value;
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;