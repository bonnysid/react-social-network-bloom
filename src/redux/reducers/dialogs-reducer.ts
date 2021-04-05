import {IDialogsState, IMessage} from "../../interfaces/dialogs-interfaces";
import {DialogsActionTypes} from "../action-types/dialogs-actions";

const initialState: IDialogsState = {
    dialogs: [],
    messages: [],
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

export type DialogsAction = AddMessageType | SelectDialogType

const dialogsReducer = (state = initialState, action: DialogsAction): IDialogsState => {

    switch (action.type) {
        case DialogsActionTypes.SELECT_DIALOG:
            const dialog = state.dialogs.find(value => value.id === action.dialogId);
            return {
                ...state,
                idActiveDialog: dialog ? dialog.id : null
            };

        default:
            return state;
    }
}

export default dialogsReducer;