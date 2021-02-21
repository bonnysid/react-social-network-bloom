import {authAPI, profileAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_INFO = 'app/auth/SET_AUTH_USER_INFO';
const SET_LOGGED_USER = 'app/auth/SET_LOGGED_USER';
const TOGGLE_FETCHING = 'app/auth/TOGGLE_FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    loggedUser: null
}

export const setAuthUserInfo = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_INFO,
    userId,
    email,
    login,
    isAuth
});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const setLoggedUser = (user) => ({type: SET_LOGGED_USER, user})

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

export const login = (email, password, rememberMe) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await authAPI.login(email, password, rememberMe)

    dispatch(toggleFetching(false));
    if (data.resultCode === 0) dispatch(loginRequest());
    else dispatch(stopSubmit('login', {_error: data.messages[0] || 'Some error!'}))

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
        default:
            return state;
    }
}

export default authReducer;