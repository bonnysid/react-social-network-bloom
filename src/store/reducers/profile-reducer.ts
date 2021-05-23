import {ProfileActionTypes} from "../action-types/profile-actions";
import {IAuthUserInfo} from "../../interfaces/auth-interfaces";
import {IPhotos, IPost, IProfile} from "../../interfaces/profile-interfaces";
import {ID} from "../../interfaces/other-interfaces";


const initialState = {
    posts: [] as IPost[],
    userPageInfo: {} as IProfile,
    isFetching: false,
    userStatus: ''
};

export type ProfileState = typeof initialState

export type AddPostAction = {
    type: ProfileActionTypes.ADD_POST,
    post: IPost
}

export type DeletePostAction = {
    type: ProfileActionTypes.DELETE_POST,
    postId: ID
}

export type SetUserPageInfoAction = {
    type: ProfileActionTypes.SET_USER_PAGE_INFO,
    userPageInfo: IProfile
}

export type ToggleFetchingAction = {
    type: ProfileActionTypes.TOGGLE_FETCHING,
    isFetching: boolean
}

export type SetUserStatusAction = {
    type: ProfileActionTypes.SET_USER_STATUS,
    status: string
}

export type SetPhotosAction = {
    type: ProfileActionTypes.SET_PHOTOS,
    photos: IPhotos
}

export type SetPostsAction = {
    type: ProfileActionTypes.SET_POSTS,
    posts: IPost[]
}

export type ProfileAction =
    SetPostsAction
    | AddPostAction
    | DeletePostAction
    | SetUserStatusAction
    | SetUserPageInfoAction
    | ToggleFetchingAction
    | SetPhotosAction


const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {


    switch (action.type) {

        case ProfileActionTypes.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post],
            };

        case ProfileActionTypes.DELETE_POST:
            state.posts.forEach((item, index) => {
                if (item.id === action.postId) state.posts.splice(index, 1);
            });
            return {
                ...state,
                posts: [...state.posts]
            };
        case ProfileActionTypes.SET_USER_PAGE_INFO:
            return {
                ...state,
                userPageInfo: action.userPageInfo
            }
        case ProfileActionTypes.TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case ProfileActionTypes.SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }
        case ProfileActionTypes.SET_PHOTOS:
            return {
                ...state,
                userPageInfo: {...state.userPageInfo, photos: action.photos} as IProfile
            }
        case ProfileActionTypes.SET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            };
        default:
            return state;
    }
}

export default profileReducer;
