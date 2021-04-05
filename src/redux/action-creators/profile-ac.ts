import {ProfileActionTypes} from "../action-types/profile-actions";
import {profileAPI} from "../../api/api";
import {setHeaderTitle} from "./navbar-ac";
import {stopSubmit} from "redux-form";
import {
    AddPostAction,
    DeletePostAction, ProfileAction, SetPhotosAction,
    SetUserPageInfoAction,
    SetUserStatusAction,
    ToggleFetchingAction
} from "../reducers/profile-reducer";
import {IAuthUserInfo} from "../../interfaces/auth-interfaces";
import {IPhotos, IProfile} from "../../interfaces/profile-interfaces";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import {SetHeaderTitleAction} from "../reducers/navbar-reducer";

export type ProfileThunk = ThunkAction<Promise<void>, State, undefined, ProfileAction | SetHeaderTitleAction>

export const addPost = (authorInfo: IAuthUserInfo | null, message: string): AddPostAction => ({
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

export const getUserInfo = (userId: number | string | null): ProfileThunk => async (dispatch, getState) => {
    dispatch(toggleFetching(true));
    const data = await profileAPI.getProfileInfo(userId)
    const status = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(status))
    dispatch(setUserPageInfo(data));
    dispatch(setHeaderTitle(data.fullName))
    dispatch(toggleFetching(false));
}

export const getUserStatus = (userId: number): ProfileThunk  => async (dispatch) => {
    const status = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(status))
}

export const updateUserStatus = (status: string): ProfileThunk  => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data: any = await profileAPI.updateUserStatus(status)

    if (data.resultCode === 0) {
        dispatch(toggleFetching(false));
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (photo: any): ProfileThunk  => async (dispatch) => {
    const data: any = await profileAPI.savePhoto(photo);

    dispatch(setPhotos(data.data.photos));
}

export const saveProfile = (profile: IProfile): ProfileThunk  => async (dispatch) => {
    // dispatch(toggleFetching(true))
    const data: any = await profileAPI.saveProfile(profile);
    if (data.data.resultCode === 0) {
        await dispatch(getUserInfo(profile.userId));
    } else {
        stopSubmit('description', {_error: data.messages[0] || 'Some error!'})
    }
    // dispatch(toggleFetching(false))
}