import React, {useEffect} from 'react';
import s from './Posts.module.css';
import Post from './Post';
import InputPostForm from "./PostsForm";
import {reset} from "redux-form";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IPostData} from "../../../interfaces/profile-interfaces";

const Posts: React.FC = React.memo((props) => {

    const {putPost, removePost} = useActions()
    const {posts} = useTypedSelector(state => state.profilePage)
    const postsItems = posts.map(post => (
        <Post
            id={post.id}
            handleDelete={() => removePost(post.id)}
            photo={post.user.photo}
            title={post.title}
            author={post.user.username}
            comment={post.text}
            date={post.date}
            likeCount={post.likeCount}
            key={post.id}
        />))

    const onAddPost = ({text, title}: IPostData) => {
        reset('posts');
        putPost(title, text, new Date());
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
