const initialState = {
    joinedUser: {
        id: 4,
        name: 'Nikita Bortsov',
        avatarLink: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
    },
    all: [
        {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'},
        {id: 2, name: 'Ira Pauchok', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f'},
        {id: 3, name: 'Nikita Brekhov', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b'},
        {
            id: 4,
            name: 'Nikita Bortsov',
            avatarUrl: 'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg',
        }
    ],
}

const usersReducer = (state = initialState, action) => {
    return state;
}

export default usersReducer;