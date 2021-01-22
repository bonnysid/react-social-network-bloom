const initialState = {
    joinedUser: {
        id: 4,
        name: 'Nikita Bortsov',
        avatarLink: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
    },
    all: [],
    searchText: ''
}

const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";
const SET_USERS = "SET_USERS";
const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

export const addUserAC = (id) => ({type: ADD_USER, userId: id});
export const deleteUserAC = (id) => ({type: DELETE_USER, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, usersData: users});
export const onSearchChangeAC = (text) => ({type: CHANGE_SEARCH_TEXT, text: text});

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                all: state.all.map(u => {
                    if(u.id === action.userId) {
                        u.isFriend = true
                    }
                    return u;
                })
            }
        case DELETE_USER:
            return {
                ...state,
                all: state.all.map(u => {
                    if(u.id === action.userId) {
                        u.isFriend = false
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                all: action.usersData
            }
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.text
            }
        default: return state;
    }
}

export default usersReducer;