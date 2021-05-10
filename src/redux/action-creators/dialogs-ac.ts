import {DialogsActionTypes} from "../action-types/dialogs-actions";
import {
    AddMessageType, AddDialogType,
    DialogsAction,
    SelectDialogType,
    SetDialogsType,
    SetFriendsType
} from "../reducers/dialogs-reducer";
import {IDialog, IMessage} from "../../interfaces/dialogs-interfaces";
import {chatAPI, usersAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import {Dispatch} from "redux";
import {GetState} from "../../interfaces/other-interfaces";
import {IUser} from "../../interfaces/users-interfaces";


export type DialogsThunk = ThunkAction<Promise<void>, State, unknown, DialogsAction>;

export const addMessage = (messageInfo: IMessage): AddMessageType => ({
    type: DialogsActionTypes.ADD_MESSAGE,
    messageInfo
});
export const setFriends = (friends: IUser[]): SetFriendsType => ({type: DialogsActionTypes.SET_FRIENDS, friends})
export const setDialogs = (dialogs: IDialog[]): SetDialogsType => ({type: DialogsActionTypes.SET_DIALOGS, dialogs})
export const addDialog = (dialog: IDialog): AddDialogType => ({type: DialogsActionTypes.ADD_DIALOG, dialog})
export const selectDialog = (id: number): SelectDialogType => ({type: DialogsActionTypes.SELECT_DIALOG, dialogId: id});
export const getFriends = (): DialogsThunk  => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await usersAPI.getFriends();
        const {data} = response;
        dispatch(setFriends(data))

    } catch (e) {
        console.error(e)
    }
}
export const getDialogs = (): DialogsThunk  => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await chatAPI.getDialogs();
        const {data} = response;
        dispatch(setDialogs(data))
    } catch (e) {
        console.error(e)
    }
}

export const createDialog = (id: string | number):DialogsThunk => async (dispatch: Dispatch<DialogsAction>, getState: GetState) => {
    try {
        const response = await chatAPI.createDialog(id)
        const {data} = response
        dispatch(addDialog(data))
    } catch (e) {
        console.error(e)
    }
}