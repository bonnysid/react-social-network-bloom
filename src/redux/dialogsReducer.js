const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const SELECT_DIALOG = 'SELECT_DIALOG';

export const addMessageActionCreator = (authorInfo) => ({type: ADD_MESSAGE, authorInfo: authorInfo});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const selectDialogActionCreator = (id) => ({type: SELECT_DIALOG, dialogId: id});

const dialogsReducer = (state, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            const activeDialog = state.dialogs.find(dialog => dialog.isActive);
            const dialogMessages = activeDialog.messages;

            const msg = {
                id: dialogMessages ? dialogMessages[dialogMessages.length - 1].id++ : 1,
                time: new Date().toTimeString().substr(0, 9),
                message: state.newMessageText,
                author: action.authorInfo
            };

            activeDialog.messages.push(msg);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        case SELECT_DIALOG:
            state.dialogs.forEach(d => {
                if (d.id === action.dialogId) {
                    d.isActive = true;
                } else {
                    d.isActive = false;
                }
            });
            return state;

        default: return state;
    }
}

export default dialogsReducer;