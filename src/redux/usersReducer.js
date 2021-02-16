
import {usersAPI} from "../API/API";

const initialState = {
    all: [],
    searchText: '',
    totalCountUsers: 0,
    pageSize: 8,
    page: 1,
    isFetching: false,
    followingProcess: []
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_PAGE = 'SET_PAGE';
const RESET_USERS = 'RESET_USERS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS'

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersData) => ({type: SET_USERS, usersData});
export const onSearchChange = (text) => ({type: CHANGE_SEARCH_TEXT, text});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count});
export const setPage = (page) => ({type: SET_PAGE, page});
export const resetUsers = () => ({type: RESET_USERS});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProcess= (isFollowing, userId) => ({type: TOGGLE_FOLLOWING_PROCESS, isFollowing, userId});

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCountUsers(data.totalCount));
        });
}

export const follow = (id) => (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    usersAPI.followUser(id)
        .then(data => {
            dispatch(toggleFollowingProcess(false));
            if(data.resultCode === 0) dispatch(followSuccess(id));
        })
}

export const unfollow = (id) => (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    usersAPI.unfollowUser(id)
        .then(data => {
            dispatch(toggleFollowingProcess(false));
            if(data.resultCode === 0) dispatch(unfollowSuccess(id));
        })
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                all: state.all.map(u => {
                    if(u.id === action.userId) {
                        u.followed = true
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                all: state.all.map(u => {
                    if(u.id === action.userId) {
                        u.followed = false
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                all: [...state.all, ...action.usersData]
            }
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.text
            }
        case SET_TOTAL_COUNT_USERS:
            return {
                ...state,
                totalCountUsers: action.count
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case RESET_USERS:
            return {
                ...state,
                all: []
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state,
                followingProcess: action.isFollowing ?
                    [...state.followingProcess, action.userId]
                    :
                    state.followingProcess.filter(id => id !== action.userId)
            }
        default: return state;
    }
}

export default usersReducer;