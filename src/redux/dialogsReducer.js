const ADD_MESSAGE = 'ADD_MESSAGE';
const SELECT_DIALOG = 'SELECT_DIALOG';

const initialState = {
     dialogs : [
         {id: 1, isActive: true, user: {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'}, time: new Date().toTimeString().substr(0, 9), messages: [
                 {id: 1, author: {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'}, time: new Date().toTimeString().substr(0, 9), message: 'Hello'},
                 {id: 2, author: {id: 1, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'}, time: new Date().toTimeString().substr(0, 9), message: 'How are you?'},
             ],},
         {id: 2, isActive: false, user: {id: 2, name: 'Ira Pauchok', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f'}, time: new Date().toTimeString().substr(0, 9),  messages: []},
         {id: 3, isActive: false, user: {id: 3, name: 'Nikita Brekhov', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b'}, time: new Date().toTimeString().substr(0, 9), messages: []}
     ],
};

export const addMessage = (authorInfo, message) => ({type: ADD_MESSAGE, authorInfo, message});
export const selectDialog = (id) => ({type: SELECT_DIALOG, dialogId: id});

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            const activeDialog = stateCopy.dialogs.find(dialog => dialog.isActive);
            const dialogMessages = activeDialog.messages;
            const msg = {
                id: dialogMessages ? dialogMessages[dialogMessages.length - 1].id++ : 1,
                time: new Date().toTimeString().substr(0, 9),
                message: action.message,
                author: action.authorInfo
            };
            activeDialog.messages.push(msg);
            stateCopy.newMessageText = '';
            return stateCopy;

        case SELECT_DIALOG:
            state.dialogs.forEach(d => {
                d.isActive = d.id === action.dialogId;
            });
            return {
                ...state,
                dialogs: [...state.dialogs]
            };

        default: return state;
    }
}

export default dialogsReducer;