const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const DELETE_POST = 'DELETE_POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const SELECT_DIALOG = 'SELECT_DIALOG';

export const addPostActionCreator = (authorInfo) => ({type: ADD_POST, authorInfo: authorInfo});
export const addMessageActionCreator = (authorInfo) => ({type: ADD_MESSAGE, authorInfo: authorInfo});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, postId: id});
export const selectDialogActionCreator = (id) => ({type: SELECT_DIALOG, dialogId: id});

const store = {
    _state: {
        dialogsPage: {
            dialogs : [
                {id: 1, isActive: true, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', messages: [
                        {id: 1, time: new Date().toTimeString().substr(0, 9), message: 'Hello'},
                        {id: 2, time: new Date().toTimeString().substr(0, 9), message: 'How are you?'},
                    ],},
                {id: 2, isActive: false, name: 'Ira Pauchok', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f', messages: []},
                {id: 3, isActive: false, name: 'Nikita Brekhov', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b', messages: []}
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
                {title: 'Friends', link: 'friends'},
                {title: 'Music', link: 'music'},
                {title: 'Settings', link: 'settings'}
            ]
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {},

    _addPost(authorInfo) {
        const post = {
            id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id++,
            author: authorInfo.name,
            comment: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },
    _deletePost(id) {
        this._state.profilePage.posts.forEach((item, index) => {
            if (item.id === id) this._state.profilePage.posts.splice(index, 1);
        });
        this.rerenderEntireTree(this._state);
    },
    _updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this.rerenderEntireTree(this._state);
    },
    _addMessage(authorInfo) {
        console.log(authorInfo);
        const msg = {
            id: this._state.dialogsPage.dialogs[authorInfo.id - 1].messages[this._state.dialogsPage.dialogs[authorInfo.id - 1].messages.length - 1].id++,
            time: new Date().toTimeString().substr(0, 9),
            message: this._state.dialogsPage.newMessageText
        };

        this._state.dialogsPage.dialogs[authorInfo.id - 1].messages.push(msg);
        this._state.dialogsPage.newMessageText = '';
        this.rerenderEntireTree(this._state);
    },
    _updateNewMessageText(text) {
        this._state.dialogsPage.newMessageText = text;
        this.rerenderEntireTree(this._state);
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost(action.authorInfo);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newText);
                break;
            case DELETE_POST:
                this._deletePost(action.postId);
                break;
            case ADD_MESSAGE:
                this._addMessage(action.authorInfo);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._updateNewMessageText(action.newText);
                break;
        }
    }
}

export default store;