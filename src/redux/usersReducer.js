const initialState = {
    joinedUser: {
        id: 4,
        name: 'Nikita Bortsov',
        avatarLink: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
    },
    all: [],
    searchText: '',
    totalCountUsers: 0,
    pageSize: 6,
    page: 1,
    isFetching: false
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_PAGE = 'SET_PAGE';
const RESET_USERS = 'RESET_USERS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

export const followUser = (userId) => ({type: FOLLOW, userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersData) => ({type: SET_USERS, usersData});
export const onSearchChange = (text) => ({type: CHANGE_SEARCH_TEXT, text});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count});
export const setPage = (page) => ({type: SET_PAGE, page});
export const resetUsers = () => ({type: RESET_USERS});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

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
        default: return state;
    }
}

export default usersReducer;