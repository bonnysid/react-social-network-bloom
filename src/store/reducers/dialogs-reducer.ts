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

export type SetMessagesType = {
    type: DialogsActionTypes.SET_MESSAGES,
    messages: IMessage[]
}

export type DeleteMessageType = {
    type: DialogsActionTypes.DELETE_MESSAGE,
    id: number | string
}

export type UpdateMessageType = {
    type: DialogsActionTypes.UPDATE_MESSAGE,
    id: number | string,
    text: string
}

export type ToggleFetchingType = {
    type: DialogsActionTypes.TOGGLE_FETCHING,
    isFetching: boolean
}


export type DialogsAction =
    UpdateMessageType
    | DeleteMessageType
    | AddMessageType
    | SelectDialogType
    | SetFriendsType
    | SetDialogsType
    | AddDialogType
    | SetMessagesType
    | ToggleFetchingType

const dialogsReducer = (state = initialState, action: DialogsAction): IDialogsState => {

    switch (action.type) {
        case DialogsActionTypes.ADD_MESSAGE:
            return {...state, messages: [...state.messages, action.messageInfo]}
        case DialogsActionTypes.SET_FRIENDS:
            return {...state, friends: action.friends}
        case DialogsActionTypes.SET_DIALOGS:
            return {...state, dialogs: action.dialogs}
        case DialogsActionTypes.TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case DialogsActionTypes.ADD_DIALOG:
            return {...state, dialogs: [...state.dialogs, action.dialog]}
        case DialogsActionTypes.SET_MESSAGES:
            return {...state, messages: action.messages}
        case DialogsActionTypes.SELECT_DIALOG:
            return {...state, idActiveDialog: action.dialogId}
        case DialogsActionTypes.DELETE_MESSAGE:
            return {...state, messages: state.messages.filter(msg => msg.id !== action.id)}
        case DialogsActionTypes.UPDATE_MESSAGE:
            return {
                ...state, messages: state.messages.map(msg => {
                    if (msg.id === action.id) {
                        msg.text = action.text
                    }
                    return msg
                })
            }

        default:
            return state;
    }
}

export default dialogsReducer;
