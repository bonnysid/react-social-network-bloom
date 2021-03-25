import {AuthActionTypes} from "../action-types/auth-actions";
import {DispatchType} from "../../interfaces/other-interfaces";
import {authAPI, profileAPI, securityAPI} from "../../API/API";
import {stopSubmit} from "redux-form";
import {SetAuthUserInfoType, SetCaptchaUrlType, SetLoggedUserType, ToggleFetchingType} from "../reducers/auth-reducer";
import {IAuthUserInfo} from "../../interfaces/auth-interfaces";

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

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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