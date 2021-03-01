import {authAPI, profileAPI, securityAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_INFO = 'app/auth/SET_AUTH_USER_INFO';
const SET_LOGGED_USER = 'app/auth/SET_LOGGED_USER';
const TOGGLE_FETCHING = 'app/auth/TOGGLE_FETCHING';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    loggedUser: null,
    captchaUrl: null
}

export const setAuthUserInfo = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_INFO,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, payload: {isFetching}});
export const setLoggedUser = (loggedUser) => ({type: SET_LOGGED_USER, payload: {loggedUser}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}})

export const loginRequest = () => async (dispatch) => {
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


export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await authAPI.login(email, password, rememberMe, captcha)

    dispatch(toggleFetching(false));
    if (data.resultCode === 0) dispatch(loginRequest());
    else {
        if(data.resultCode === 10) dispatch(getCaptchaUrl());

        dispatch(stopSubmit('login', {_error: data.messages[0] || 'Some error!'}))
    }

}

export const logout = () => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await authAPI.logout()

    dispatch(toggleFetching(false));
    if (data.resultCode === 0) {
        dispatch(setAuthUserInfo(null, null, null, false));
    }

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_INFO:
        case TOGGLE_FETCHING:
        case SET_LOGGED_USER:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;