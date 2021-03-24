import {IMessage} from "../../utils/interfaces/interfaces";
import {DialogsActionTypes} from "../action-types/dialogs";
import {AddMessageType, SelectDialogType} from "../dialogsReducer";

export const addMessage = (messageInfo: IMessage): AddMessageType => ({type: DialogsActionTypes.ADD_MESSAGE, messageInfo});
export const selectDialog = (id: number): SelectDialogType => ({type: DialogsActionTypes.SELECT_DIALOG, dialogId: id});
