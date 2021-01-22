import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import navbarReducer from "./navbarReducer";

const store = {
    _state: {
        dialogsPage: {
            dialogs : [
                {id: 1, isActive: true, user: {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'}, time: new Date().toTimeString().substr(0, 9), messages: [
                        {id: 1, author: {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'}, time: new Date().toTimeString().substr(0, 9), message: 'Hello'},
                        {id: 2, author: {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'}, time: new Date().toTimeString().substr(0, 9), message: 'How are you?'},
                    ],},
                {id: 2, isActive: false, user: {id: 2, name: 'Ira Pauchok', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f'}, time: new Date().toTimeString().substr(0, 9),  messages: []},
                {id: 3, isActive: false, user: {id: 3, name: 'Nikita Brekhov', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b'}, time: new Date().toTimeString().substr(0, 9), messages: []}
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, author: 'Nikita Bortsov', comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', likeCount: 90},
                {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
            ],
            newPostText: ''
        },
        navbar: {
            menuItems: [
                {title: 'My Profile', link: 'profile'},
                {title: 'Messages', link: 'messages'},
                {title: 'News', link: 'news'},
                {title: 'Users', link: 'friends'},
                {title: 'Music', link: 'music'},
                {title: 'Settings', link: 'settings'}
            ]
        },
        users: {
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

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {},

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.users = usersReducer(this._state.users, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this.rerenderEntireTree(this._state);
    }
}

export default store;