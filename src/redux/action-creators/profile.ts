import {DispatchType, IAuthUserInfo, IPhotos, IProfile} from "../../utils/interfaces/interfaces";
import {ProfileActionTypes} from "../action-types/profile";
import {profileAPI} from "../../API/API";
import {setHeaderTitle} from "./navbar";
import {stopSubmit} from "redux-form";
import {
    AddPostAction,
    DeletePostAction, SetPhotosAction,
    SetUserPageInfoAction,
    SetUserStatusAction,
    ToggleFetchingAction
} from "../reducers/profileReducer";

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