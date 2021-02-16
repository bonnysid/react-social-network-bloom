
import {authAPI, profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_INFO = 'SET_AUTH_USER_INFO';
const SET_LOGGED_USER = 'SET_LOGGED_USER';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    loggedUser: null
}

export const setAuthUserInfo = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_INFO, userId, email, login, isAuth});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const setLoggedUser = (user) => ({type: SET_LOGGED_USER, user})

export const loginRequest = () => (dispatch) => {
    dispatch(toggleFetching(true));
    return authAPI.getAuth().then(data => {
        dispatch(toggleFetching(false));
        if(data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUserInfo(id, email, login, true));
            profileAPI.getProfileInfo(id).then(data => dispatch(setLoggedUser(data)))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.login(email,password,rememberMe)
        .then(data => {
            dispatch(toggleFetching(false));
            if(data.resultCode === 0)dispatch(loginRequest());
            else dispatch(stopSubmit('login', {_error: data.messages[0] || 'Some error!' }))
        })
}

export const logout = () => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.logout()
        .then(data => {
            dispatch(toggleFetching(false));
            if(data.resultCode === 0) {
                dispatch(setAuthUserInfo(null, null, null, false));
            }
        })
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_INFO:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.user
            }
        default: return state;
    }
}

export default authReducer;