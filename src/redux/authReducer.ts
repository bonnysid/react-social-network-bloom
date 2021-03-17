import {authAPI, profileAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";
import {IAuthUserInfo, DispatchType} from "../utils/interfaces/interfaces";

export enum AuthActionTypes {
    SET_AUTH_USER_INFO = 'app/auth/SET_AUTH_USER_INFO',
    SET_LOGGED_USER = 'app/auth/SET_LOGGED_USER',
    TOGGLE_FETCHING = 'app/auth/TOGGLE_FETCHING',
    SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'
}

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
    payload: {loggedUser: IAuthUserInfo}
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

export type AuthAction = SetLoggedUserType | ToggleFetchingType | SetCaptchaUrlType | SetAuthUserInfoType;

export const setAuthUserInfo = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserInfoType => ({
    type: AuthActionTypes.SET_AUTH_USER_INFO,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});
export const toggleFetching = (isFetching: boolean): ToggleFetchingType => ({
    type: AuthActionTypes.TOGGLE_FETCHING,
    payload: {isFetching}
});
export const setLoggedUser = (loggedUser: IAuthUserInfo): SetLoggedUserType => ({
    type: AuthActionTypes.SET_LOGGED_USER,
    payload: {loggedUser}
})
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => ({
    type: AuthActionTypes.SET_CAPTCHA_URL,
    payload: {captchaUrl}
})

export const loginRequest = () => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true));
    const data = await authAPI.getAuth()
    dispatch(toggleFetching(false));
    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserInfo(id, email, login, true));
        await profileAPI.getProfileInfo(id).then(data => dispatch(setLoggedUser(data)))
    }
    return data;
}

export const getCaptchaUrl = () => async (dispatch: DispatchType) => {
    const data = await securityAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true));
    const data = await authAPI.login(email, password, rememberMe, captcha)

    dispatch(toggleFetching(false));
    if (data.resultCode === 0) await dispatch(loginRequest());
    else {
        if (data.resultCode === 10) await dispatch(getCaptchaUrl());

        dispatch(stopSubmit('login', {_error: data.messages[0] || 'Some error!'}))
    }

}

export const logout = () => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true));
    const data = await authAPI.logout()

    dispatch(toggleFetching(false));
    if (data.resultCode === 0) {
        dispatch(setAuthUserInfo(null, null, null, false));
    }

}

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