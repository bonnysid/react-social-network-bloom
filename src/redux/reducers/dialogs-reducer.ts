import {IDialog, IDialogsState, IMessage} from "../../interfaces/dialogs-interfaces";
import {DialogsActionTypes} from "../action-types/dialogs-actions";
import {IUser} from "../../interfaces/users-interfaces";

const initialState: IDialogsState = {
    isFetching: false,
    dialogs: [],
    messages: [],
    friends: [],
    idActiveDialog: 1
}

export type AddMessageType = {
    type: DialogsActionTypes.ADD_MESSAGE,
    messageInfo: IMessage
}

export type SelectDialogType = {
    type: DialogsActionTypes.SELECT_DIALOG,
    dialogId: number
}

export type SetFriendsType = {
    type: DialogsActionTypes.SET_FRIENDS,
    friends: IUser[]
}
export type SetDialogsType = {
    type: DialogsActionTypes.SET_DIALOGS,
    dialogs: IDialog[]
}

export type AddDialogType = {
    type: DialogsActionTypes.ADD_DIALOG,
    dialog: IDialog
}


export type DialogsAction = AddMessageType | SelectDialogType | SetFriendsType | SetDialogsType | AddDialogType

const dialogsReducer = (state = initialState, action: DialogsAction): IDialogsState => {

    switch (action.type) {
        case DialogsActionTypes.SELECT_DIALOG:
            const dialog = state.dialogs.find(value => value.id === action.dialogId);
            return {
                ...state,
                idActiveDialog: dialog ? dialog.id : null
            };
        case DialogsActionTypes.ADD_MESSAGE: return {...state}
        case DialogsActionTypes.SET_FRIENDS: return {...state, friends: action.friends}
        case DialogsActionTypes.SET_DIALOGS: return {...state, dialogs: action.dialogs}
        case DialogsActionTypes.ADD_DIALOG: return {...state, dialogs: [ ...state.dialogs, action.dialog]}

        default:
            return state;
    }
}

export default dialogsReducer;