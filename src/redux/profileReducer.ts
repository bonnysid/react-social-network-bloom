import {profileAPI} from "../API/API";
import {setHeaderTitle} from "./navbarReducer";
import {stopSubmit} from "redux-form";
import {DispatchType, IAuthUserInfo, IPhotos, IProfile} from "../utils/interfaces/interfaces";
import {ProfileActionTypes} from "./action-types/profile";


const initialState = {
    posts: [
        {
            id: 1,
            author: 'Nikita Bortsov' as null | string,
            comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
            likeCount: 90
        },
        {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
    ],
    userPageInfo: {},
    isFetching: false,
    userStatus: ''
};

export type ProfileState = typeof initialState

export type AddPostAction = {
    type: ProfileActionTypes.ADD_POST,
    authorInfo: IAuthUserInfo,
    message: string
}

export type DeletePostAction = {
    type: ProfileActionTypes.DELETE_POST,
    postId: number
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

export type ProfileAction =
    AddPostAction
    | DeletePostAction
    | SetUserStatusAction
    | SetUserPageInfoAction
    | ToggleFetchingAction | SetPhotosAction

export const addPost = (authorInfo: IAuthUserInfo, message: string): AddPostAction => ({
    type: ProfileActionTypes.ADD_POST,
    authorInfo,
    message
});
export const deletePost = (postId: number): DeletePostAction => ({type: ProfileActionTypes.DELETE_POST, postId});
export const setUserPageInfo = (userPageInfo: IProfile): SetUserPageInfoAction => ({
    type: ProfileActionTypes.SET_USER_PAGE_INFO,
    userPageInfo
});
export const toggleFetching = (isFetching: boolean): ToggleFetchingAction => ({
    type: ProfileActionTypes.TOGGLE_FETCHING,
    isFetching
});
export const setUserStatus = (status: string): SetUserStatusAction => ({
    type: ProfileActionTypes.SET_USER_STATUS,
    status
});
export const setPhotos = (photos: IPhotos): SetPhotosAction => ({type: ProfileActionTypes.SET_PHOTOS, photos});

export const getUserInfo = (userId?: number) => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true));
    const data = await profileAPI.getProfileInfo(userId)
    const status = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(status))
    dispatch(setUserPageInfo(data));
    dispatch(setHeaderTitle(data.fullName))
    dispatch(toggleFetching(false));
}

export const getUserStatus = (userId: number) => async (dispatch: DispatchType) => {
    const status = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(status))
}

export const updateUserStatus = (status: string) => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true));
    const data: any = await profileAPI.updateUserStatus(status)

    if (data.resultCode === 0) {
        dispatch(toggleFetching(false));
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (photo: any) => async (dispatch: DispatchType) => {
    const data: any = await profileAPI.savePhoto(photo);

    dispatch(setPhotos(data.data.photos));
}

export const saveProfile = (profile: IProfile) => async (dispatch: any) => {
    // dispatch(toggleFetching(true))
    const data: any = await profileAPI.saveProfile(profile);
    if (data.data.resultCode === 0) {
        await dispatch(getUserInfo());
    } else {
        stopSubmit('description', {_error: data.messages[0] || 'Some error!'})
    }
    // dispatch(toggleFetching(false))
}


const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {


    switch (action.type) {

        case ProfileActionTypes.ADD_POST:
            const post = {
                id: state.posts[state.posts.length - 1].id++,
                author: action.authorInfo.login,
                comment: action.message,
                likeCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, post],
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
                userPageInfo: {...state.userPageInfo, photos: action.photos}
            }
        default:
            return state;
    }
}

export default profileReducer;