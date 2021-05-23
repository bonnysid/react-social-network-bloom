import {ProfileActionTypes} from "../action-types/profile-actions";
import ProfileAPI from "../../api/profile";
import {setHeaderTitle} from "./navbar-ac";
import {stopSubmit} from "redux-form";
import {
    AddPostAction,
    DeletePostAction,
    ProfileAction,
    SetPhotosAction,
    SetPostsAction,
    SetUserPageInfoAction,
    SetUserStatusAction,
    ToggleFetchingAction
} from "../reducers/profile-reducer";
import {IAuthUserInfo} from "../../interfaces/auth-interfaces";
import {IPhotos, IPost, IProfile} from "../../interfaces/profile-interfaces";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import {SetHeaderTitleAction} from "../reducers/navbar-reducer";
import {ID} from "../../interfaces/other-interfaces";

export type ProfileThunk = ThunkAction<Promise<void>, State, undefined, ProfileAction | SetHeaderTitleAction>

export const addPost = (post: IPost): AddPostAction => ({
    type: ProfileActionTypes.ADD_POST,
    post
});

export const setPosts = (posts: IPost[]): SetPostsAction => ({type: ProfileActionTypes.SET_POSTS, posts});

export const deletePost = (postId: ID): DeletePostAction => ({type: ProfileActionTypes.DELETE_POST, postId});
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

export const getUserInfo = (userId: number | string | null): ProfileThunk => async (dispatch, getState) => {
    dispatch(toggleFetching(true));
    const data: IProfile = await ProfileAPI.getProfileInfo(userId)

    dispatch(setUserPageInfo(data));
    dispatch(setHeaderTitle(data.username))
    dispatch(setUserStatus(data.status))
    dispatch(toggleFetching(false));
}

export const getUserStatus = (userId: number): ProfileThunk  => async (dispatch) => {
    const status = await ProfileAPI.getUserStatus(userId)
    dispatch(setUserStatus(status))
}

export const updateUserStatus = (status: string): ProfileThunk  => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data: any = await ProfileAPI.updateUserStatus(status)

    if (data.resultCode === 0) {
        dispatch(toggleFetching(false));
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (photo: any): ProfileThunk  => async (dispatch) => {
    const data: any = await ProfileAPI.savePhoto(photo);

    dispatch(setPhotos(data.data.photos));
}

export const getPosts = (id: string | number): ProfileThunk  => async (dispatch) => {
    try {
        const response = await ProfileAPI.getPosts(id);
        dispatch(setPosts(response.data));
    } catch (e) {
        console.error(e)
    }
}

export const putPost = (title: string, text: string, date: Date): ProfileThunk  => async (dispatch) => {
    try {
        const post = await ProfileAPI.createPost(title, text, date, 0);
        dispatch(addPost(post));
    } catch (e) {
        console.error(e)
    }
}

export const saveProfile = (profile: IProfile): ProfileThunk  => async (dispatch) => {
    // dispatch(toggleFetching(true))
    const data: any = await ProfileAPI.saveProfile(profile);
    if (data.data.resultCode === 0) {
        await dispatch(getUserInfo(profile.userId));
    } else {
        stopSubmit('description', {_error: data.messages[0] || 'Some error!'})
    }
    // dispatch(toggleFetching(false))
}

export const removePost = (id: ID): ProfileThunk  => async (dispatch) => {
    // dispatch(toggleFetching(true))
    const response = await ProfileAPI.deletePost(id);
    if (response.data === true) {
        await dispatch(deletePost(id));
    } else {
        stopSubmit('description', {_error: response.data.messages[0] || 'Some error!'})
    }
    // dispatch(toggleFetching(false))
}
