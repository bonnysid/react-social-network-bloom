const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const DELETE_POST = 'DELETE_POST';

export const addPostActionCreator = (authorInfo) => ({type: ADD_POST, authorInfo: authorInfo});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, postId: id});

const profileReducer = (state, action) => {
    switch (action.type) {

        case ADD_POST:
            const post = {
                id: state.posts[state.posts.length - 1].id++,
                author: action.authorInfo.name,
                comment: state.newPostText,
                likeCount: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        case DELETE_POST:
            state.posts.forEach((item, index) => {
                if (item.id === action.postId) state.posts.splice(index, 1);
            });
            return state;

        default: return state;
    }
}

export default profileReducer;