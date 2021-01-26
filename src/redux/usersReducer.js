const initialState = {
    joinedUser: {
        id: 4,
        name: 'Nikita Bortsov',
        avatarLink: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
    },
    all: [
        {id: 1, followed: true, isOnline: true, name: 'Yana Pros', photos: {
                small: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg',
                large: null
            }
            , status: 'what is it?'},
        {id: 2, followed: true, isOnline: true, name: 'Ira Pauchok', photos: {
            small: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f', large: null}, status: 'time to changes'},
        {id: 3, followed: false, isOnline: false, name: 'Nikita Brekhov', photos: {
            small: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b', large: null}, status: 'go cs!?'},
    ],
    searchText: '',
    totalCountUsers: 0,
    pageSize: 5,
    page: 1
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_PAGE = 'SET_PAGE';

export const followUserAC = (id) => ({type: FOLLOW, userId: id});
export const unfollowUserAC = (id) => ({type: UNFOLLOW, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, usersData: users});
export const onSearchChangeAC = (text) => ({type: CHANGE_SEARCH_TEXT, text: text});
export const setTotalCountUsersAC = (count) => ({type: SET_TOTAL_COUNT_USERS, count});
export const setPageAC = (page) => ({type: SET_PAGE, page});

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
        default: return state;
    }
}

export default usersReducer;