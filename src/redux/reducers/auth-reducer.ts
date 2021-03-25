import {authAPI, profileAPI, securityAPI} from "../../API/API";
import {stopSubmit} from "redux-form";
import {DispatchType} from "../../interfaces/other-interfaces";
import {AuthActionTypes} from "../action-types/auth-actions";
import {HandleThunkActionCreator} from "react-redux";
import {IAuthUserInfo} from "../../interfaces/auth-interfaces";


const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    isFetching: false,
    loggedUser: null as null | IAuthUserInfo,
    captchaUrl: null as null | string
}

export type AuthStateType = typeof initialState;

export type SetLoggedUserType = {
    type: AuthActionTypes.SET_LOGGED_USER,
    payload: { loggedUser: IAuthUserInfo }
}
export type ToggleFetchingType = {
    type: AuthActionTypes.TOGGLE_FETCHING,
    payload: {
        isFetching: boolean
    }
}
export type SetCaptchaUrlType = {
    type: AuthActionTypes.SET_CAPTCHA_URL,
    payload: {
        captchaUrl: string
    }
}
export type SetAuthUserInfoType = {
    type: AuthActionTypes.SET_AUTH_USER_INFO,
    payload: {
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}


export type AuthAction =
    SetLoggedUserType
    | ToggleFetchingType
    | SetCaptchaUrlType
    | SetAuthUserInfoType;

const authReducer = (state = initialState, action: AuthAction): AuthStateType => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_USER_INFO:
        case AuthActionTypes.TOGGLE_FETCHING:
        case AuthActionTypes.SET_LOGGED_USER:
        case AuthActionTypes.SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;