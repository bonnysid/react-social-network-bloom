import {DialogsActionTypes} from "../action-types/dialogs-actions";
import {AddMessageType, SelectDialogType} from "../reducers/dialogs-reducer";
import {IMessage} from "../../interfaces/profile-interfaces";

export const addMessage = (messageInfo: IMessage): AddMessageType => ({type: DialogsActionTypes.ADD_MESSAGE, messageInfo});
export const selectDialog = (id: number): SelectDialogType => ({type: DialogsActionTypes.SELECT_DIALOG, dialogId: id});
