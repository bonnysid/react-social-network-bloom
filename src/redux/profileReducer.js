import {profileAPI} from "../API/API";
import {setHeaderTitle} from "./navbarReducer";

const ADD_POST = 'app/profile/ADD_POST';
const DELETE_POST = 'app/profile/DELETE_POST';
const SET_USER_PAGE_INFO = 'app/profile/SET_USER_PAGE_INFO';
const TOGGLE_FETCHING = 'app/profile/TOGGLE_FETCHING';
const SET_USER_STATUS = 'app/profile/SET_USER_STATUS';
const SET_PHOTOS = 'app/profile/SET_PHOTOS';

const initialState = {
    posts: [
        {
            id: 1,
            author: 'Nikita Bortsov',
            comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
            likeCount: 90
        },
        {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
    ],
    userPageInfo: {},
    isFetching: false,
    userStatus: ''
};

export const addPost = (authorInfo, message) => ({type: ADD_POST, authorInfo, message});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserPageInfo = (userPageInfo) => ({type: SET_USER_PAGE_INFO, userPageInfo});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setPhotos = (photos) => ({type: SET_PHOTOS, photos});

export const getUserInfo = (userId) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await profileAPI.getProfileInfo(userId)
    const status = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(status))
    dispatch(setUserPageInfo(data));
    dispatch(setHeaderTitle(data.fullName))
    dispatch(toggleFetching(false));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const status = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(status))
}

export const updateUserStatus = (status) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await profileAPI.updateUserStatus(status)

    if (data.resultCode === 0) {
        dispatch(toggleFetching(false));
        dispatch(setUserStatus(status));
    }

}

export const savePhoto = (photo) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photo);

    dispatch(setPhotos(data.data.photos));
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_POST:
            const post = {
                id: state.posts[state.posts.length - 1].id++,
                author: action.authorInfo.name,
                comment: action.message,
                likeCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
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
        case SET_PHOTOS:
            return {
                ...state,
                userPageInfo: {...state.userPageInfo, photos: action.photos}
            }
        default:
            return state;
    }
}

export default profileReducer;