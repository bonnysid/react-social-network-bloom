const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    posts: [
        {id: 1, author: 'Nikita Bortsov', comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', likeCount: 90},
        {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
    ],
    newPostText: ''
};

export const addPostActionCreator = (authorInfo) => ({type: ADD_POST, authorInfo: authorInfo});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, postId: id});

const profileReducer = (state = initialState, action) => {
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