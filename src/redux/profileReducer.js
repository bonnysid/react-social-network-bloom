import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PAGE_INFO = 'SET_USER_PAGE_INFO';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        {id: 1, author: 'Nikita Bortsov', comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', likeCount: 90},
        {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
    ],
    newPostText: '',
    userPageInfo: {},
    isFetching: false,
    userStatus: ''
};

export const addPost = (authorInfo) => ({type: ADD_POST, authorInfo});
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserPageInfo = (userPageInfo) => ({type: SET_USER_PAGE_INFO, userPageInfo});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserInfo = (userId) => (dispatch) => {
    dispatch(toggleFetching(true));
    profileAPI.getProfileInfo(userId)
        .then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUserPageInfo(data));
        })
}

export const getUserStatus = (userID) => (dispatch) => {
    dispatch(toggleFetching(true));
    profileAPI.getUserStatus(userID)
        .then(data => {
            dispatch(setUserStatus(data))
        })
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_POST:
            const post = {
                id: state.posts[state.posts.length - 1].id++,
                author: action.authorInfo.name,
                comment: state.newPostText,
                likeCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case DELETE_POST:
            state.posts.forEach((item, index) => {
                if (item.id === action.postId) state.posts.splice(index, 1);
            });
            return {
                ...state,
                posts: [...state.posts]
            };
        case SET_USER_PAGE_INFO:
            return {
                ...state,
                userPageInfo: action.userPageInfo
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }
        default: return state;
    }
}

export default profileReducer;