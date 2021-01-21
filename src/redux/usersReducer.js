const initialState = {
    joinedUser: {
        id: 4,
        name: 'Nikita Bortsov',
        avatarLink: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
    },
    all: [
        {id: 1, isFriend: true, isOnline: true, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', status: 'what is it?'},
        {id: 2, isFriend: true, isOnline: true, name: 'Ira Pauchok', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f', status: 'time to changes'},
        {id: 3, isFriend: false, isOnline: false, name: 'Nikita Brekhov', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b', status: 'go cs!?'},
        {
            id: 4,
            name: 'Nikita Bortsov',
            avatarUrl: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
        }
    ],
    searchText: ''
}

const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";
const SET_USERS = "SET_USERS";
const OPEN_MSGS = "OPEN_MSGS";

const addUserAC = (id) => ({type: ADD_USER, userId: id});
const deleteUserAC = (id) => ({type: DELETE_USER, userId: id});
const setUsersAC = (users) => ({type: SET_USERS, usersData: users});
const openMessagesAC = (id) => ({type: OPEN_MSGS, userId: id});

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
        default: return state;
    }
}

export default usersReducer;