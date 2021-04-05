import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import {connect} from "react-redux";
import InputPostForm from "./PostsForm";
import {reset} from "redux-form";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Posts: React.FC = React.memo((props) => {

    const {addPost} = useActions()
    const {loggedUser} = useTypedSelector(state => state.auth)

    const onAddPost = ({message}) => {
        reset('posts');
        addPost(loggedUser, message);
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
})

const mapStateToProps = (state) => {
    return {
        loggedUser: state.auth.loggedUser,
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