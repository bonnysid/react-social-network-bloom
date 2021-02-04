import API from "../API";
import {authAPI} from "../API/API";

const SET_AUTH_USER_INFO = 'SET_AUTH_USER_INFO';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

export const setAuthUserInfo = (userId, email, login) => ({type: SET_AUTH_USER_INFO, userId, email, login});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

export const loginRequest = () => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.getAuth().then(data => {
        if(data.resultCode === 0) {
            dispatch(toggleFetching(false));
            const {id, email, login} = data.data;
            dispatch(setAuthUserInfo(id, email, login));
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
        default: return state;
    }
}

export default authReducer;