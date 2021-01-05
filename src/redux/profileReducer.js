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
    const stateCopy = {
        ...state,
        posts: [...state.posts]
    };

    switch (action.type) {

        case ADD_POST:
            const post = {
                id: stateCopy.posts[stateCopy.posts.length - 1].id++,
                author: action.authorInfo.name,
                comment: stateCopy.newPostText,
                likeCount: 0
            }
            stateCopy.posts.push(post);
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;

        case DELETE_POST:
            stateCopy.posts.forEach((item, index) => {
                if (item.id === action.postId) state.posts.splice(index, 1);
            });
            return stateCopy;

        default: return stateCopy;
    }
}

export default profileReducer;