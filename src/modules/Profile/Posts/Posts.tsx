import React from 'react';
import s from './Posts.module.css';
import Post from './Post';
import InputPostForm from "./PostsForm";
import {reset} from "redux-form";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IPostData} from "../../../interfaces/profile-interfaces";

const Posts: React.FC = React.memo((props) => {

    const {addPost} = useActions()
    const {posts} = useTypedSelector(state => state.profilePage)
    const {username} = useTypedSelector(state => state.profilePage.userPageInfo)
    const postsItems = posts.map(post => (
        <Post
            id={post.id}
            author={username}
            comment={post.text}
            date={post.date}
            likeCount={post.likeCount}
            key={post.id}
        />))
    console.log(posts, postsItems)

    const onAddPost = ({message}: IPostData) => {
        reset('posts');
        // addPost(loggedUser, message);
    }

    return (
        <div className={s.container}>
            <section className={`${s.content} block`}>
                <InputPostForm onSubmit={onAddPost}/>
            </section>
            <section className={s.posts}>
                {postsItems}
            </section>
        </div>
    );
})

export default Posts;