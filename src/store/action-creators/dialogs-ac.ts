import {DialogsActionTypes} from "../action-types/dialogs-actions";
import {
    AddDialogType,
    AddMessageType,
    DeleteMessageType,
    DialogsAction,
    SelectDialogType,
    SetDialogsType,
    SetFriendsType,
    SetMessagesType,
    ToggleFetchingType
} from "../reducers/dialogs-reducer";
import {IDialog, IMessage} from "../../interfaces/dialogs-interfaces";
import ChatAPI from "../../api/chat";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import {Dispatch} from "redux";
import {GetState} from "../../interfaces/other-interfaces";
import {IUser} from "../../interfaces/users-interfaces";
import UsersAPI from "../../api/users";


export type DialogsThunk = ThunkAction<Promise<void>, State, unknown, DialogsAction>;

export const addMessage = (messageInfo: IMessage): AddMessageType => ({
    type: DialogsActionTypes.ADD_MESSAGE,
    messageInfo
});
export const setFriends = (friends: IUser[]): SetFriendsType => ({type: DialogsActionTypes.SET_FRIENDS, friends})
export const setMessages = (messages: IMessage[]): SetMessagesType => ({type: DialogsActionTypes.SET_MESSAGES, messages})
export const setDialogs = (dialogs: IDialog[]): SetDialogsType => ({type: DialogsActionTypes.SET_DIALOGS, dialogs})
export const addDialog = (dialog: IDialog): AddDialogType => ({type: DialogsActionTypes.ADD_DIALOG, dialog})
export const toggleFetching = (isFetching: boolean): ToggleFetchingType => ({type: DialogsActionTypes.TOGGLE_FETCHING, isFetching})
export const selectDialog = (id: number): SelectDialogType => ({type: DialogsActionTypes.SELECT_DIALOG, dialogId: id});
export const deleteMessage = (id: number | string) :DeleteMessageType => ({type: DialogsActionTypes.DELETE_MESSAGE, id});
export const getFriends = (): DialogsThunk  => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await UsersAPI.getFriends();
        const {data} = response;
        dispatch(setFriends(data))

    } catch (e) {
        console.error(e)
    }
}
export const getDialogs = (): DialogsThunk  => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await ChatAPI.getDialogs();
        const {data} = response;
        dispatch(setDialogs(data))
    } catch (e) {
        console.error(e)
    }
}

export const createDialog = (id: string | number):DialogsThunk => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await ChatAPI.createDialog(id)
        const dialogs = await ChatAPI.getDialogs()
        dispatch(setDialogs(dialogs.data))

    } catch (e) {
        console.error(e)
    }
}

export const getMessages = (id: string | number): DialogsThunk => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        // dispatch(toggleFetching(true))
        const response = await ChatAPI.getMessages(id)
        dispatch(setMessages(response.data))
        // dispatch(toggleFetching(false))
    } catch (e) {
        console.error(e)
    }
}

export const connectToChat = (id: number | string): DialogsThunk => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    connectToChat(id)
}

export const deleteMessageThunk = (id: number | string): DialogsThunk => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await ChatAPI.deleteMessage(id)
        if(response.data) {
            dispatch(deleteMessage(id))
        }
    } catch (e) {
        console.error(e)
    }
}

export const sendMsg = (idFrom: number, idTo: number, message: string): DialogsThunk => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    // sendMessage(idFrom, idTo, message);
}
