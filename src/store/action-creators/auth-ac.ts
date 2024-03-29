import {AuthActionTypes} from "../action-types/auth-actions";
import {GetState} from "../../interfaces/other-interfaces";
import {ErrorOther, FormErrors, stopSubmit, StopSubmitAction} from "redux-form";
import {
    AuthAction,
    SetAuthUserInfoType,
    SetCaptchaUrlType,
    SetLoggedUserType,
    ToggleFetchingType
} from "../reducers/auth-reducer";
import {IAuthUserInfo} from "../../interfaces/auth-interfaces";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import AuthAPI from "../../api/auth";
import ProfileAPI from "../../api/profile";

export type AuthThunk = ThunkAction<Promise<void>, State, unknown, AuthAction>;

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

export const loginRequest = (): AuthThunk => async (dispatch: Dispatch<AuthAction>, getState: GetState) => {
    dispatch(toggleFetching(true))
    try {
        const res = await AuthAPI.getAuth()
        const {id, username, email} = res.data
        if(id && username && email) {
            dispatch(setAuthUserInfo(id, email, username, true))
            await ProfileAPI.getProfileInfo(id).then(data => dispatch(setLoggedUser(data)))
        }
        dispatch(toggleFetching(false))
        return res.data
    } catch (e) {
        console.log(JSON.stringify(e, null, 2))
    }
}

export const getCaptchaUrl = (): AuthThunk => async (dispatch, getState) => {
    const data = await AuthAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AuthThunk => async (dispatch, getState) => {
    dispatch(toggleFetching(true));
    const data = await AuthAPI.login(email, password, rememberMe, captcha)

    dispatch(toggleFetching(false));
    dispatch(setAuthUserInfo(data.id, data.email, data.username, true))
    // else {
    //     if (data.resultCode === 10) await dispatch(getCaptchaUrl());
    //
    //     // @ts-ignore
    //     dispatch(stopSubmit('login', {_error: data.messages[0] || 'Some error!'}))
    // }

}

export const logout = (): AuthThunk => async (dispatch, getState) => {
    try {
        dispatch(toggleFetching(true));
        const data = await AuthAPI.logout()
        dispatch(toggleFetching(false));
        dispatch(setAuthUserInfo(null, null, null, false));
    } catch (e) {
        console.error(e)
    }



}

export const registration = (email: string, username: string, password: string): AuthThunk => async (dispatch: Dispatch<AuthAction>, getState: GetState) => {
    try {
        dispatch(toggleFetching(true))
        const res = await AuthAPI.register(email, username, password)
        dispatch(toggleFetching(false))
        return res.data
    } catch (e) {
        dispatch(toggleFetching(false))
        console.log(JSON.stringify(e, null, 2))
    }
}
