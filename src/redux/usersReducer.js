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

const FOLLOW = "app/users/FOLLOW";
const UNFOLLOW = "app/users/UNFOLLOW";
const SET_USERS = "app/users/SET_USERS";
const CHANGE_SEARCH_TEXT = 'app/users/CHANGE_SEARCH_TEXT';
const SET_TOTAL_COUNT_USERS = 'app/users/SET_TOTAL_COUNT_USERS';
const SET_PAGE = 'app/users/SET_PAGE';
const RESET_USERS = 'app/users/RESET_USERS';
const TOGGLE_FETCHING = 'app/users/TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'app/users/TOGGLE_FOLLOWING_PROCESS'

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersData) => ({type: SET_USERS, usersData});
export const onSearchChange = (text) => ({type: CHANGE_SEARCH_TEXT, text});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count});
export const setPage = (page) => ({type: SET_PAGE, page});
export const resetUsers = () => ({type: RESET_USERS});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProcess = (isFollowing, userId) => ({type: TOGGLE_FOLLOWING_PROCESS, isFollowing, userId});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCountUsers(data.totalCount));
}

export const follow = (id) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    const data = await usersAPI.followUser(id)

    dispatch(toggleFollowingProcess(false));
    if (data.resultCode === 0) dispatch(followSuccess(id));

}

export const unfollow = (id) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    const data = await usersAPI.unfollowUser(id)

    dispatch(toggleFollowingProcess(false));
    if (data.resultCode === 0) dispatch(unfollowSuccess(id));

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                all: state.all.map(u => {
                    if (u.id === action.userId) {
                        u.followed = true
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                all: state.all.map(u => {
                    if (u.id === action.userId) {
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
        default:
            return state;
    }
}

export default usersReducer;