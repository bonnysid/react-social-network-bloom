
import {authAPI, profileAPI} from "../API/API";

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

export const setAuthUserInfo = (userId, email, login) => ({type: SET_AUTH_USER_INFO, userId, email, login});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const setLoggedUser = (user) => ({type: SET_LOGGED_USER, user})

export const loginRequest = () => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.getAuth().then(data => {
        if(data.resultCode === 0) {
            dispatch(toggleFetching(false));
            const {id, email, login} = data.data;
            dispatch(setAuthUserInfo(id, email, login));
            profileAPI.getProfileInfo(id).then(data => dispatch(setLoggedUser(data)))
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
                isAuth: true
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