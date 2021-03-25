import {DialogsActionTypes} from "../action-types/dialogs-actions";
import {IMessage} from "../../interfaces/profile-interfaces";



const initialState = {
    dialogs: [
        {
            id: 1,
            isActive: true,
            userId: 1,
            userName: 'Yana Pros',
            photo: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg',
            time: new Date().toTimeString().substr(0, 9),
            message: 'How are you?',
        },
        {
            id: 2,
            isActive: false,
            userId: 2,
            name: 'Ira Pauchok',
            avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f',
            time: new Date().toTimeString().substr(0, 9),
            messages: [] as IMessage[] | null
        },
        {
            id: 3,
            isActive: false,
            userId: 3,
            userName: 'Nikita Brekhov',
            photo: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b',
            time: new Date().toTimeString().substr(0, 9),
            messages: [] as IMessage[] | null
        }
    ],
    activeDialog: {
        id: 1,
        isActive: true,
        userId: 1,
        userName: 'Yana Pros',
        photo: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg',
        time: new Date().toTimeString().substr(0, 9),
        messages: [
            {
                id: 1,
                userId: 1,
                userName: 'Yana Pros',
                photo: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg',
                time: new Date().toTimeString().substr(0, 9),
                message: 'Hello'
            },
            {
                id: 2,
                userId: 1,
                userName: 'Yana Pros',
                photo: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg' as string | null,
                time: new Date().toTimeString().substr(0, 9),
                message: 'How are you?'
            },
        ],
    }
};

export interface DialogsMessage extends IMessage {
    id: number,
    time: string
}

export type DialogsState = typeof initialState

export type AddMessageType = {
    type: DialogsActionTypes.ADD_MESSAGE,
    messageInfo: IMessage
}

export type SelectDialogType = {
    type: DialogsActionTypes.SELECT_DIALOG,
    dialogId: number
}

export type DialogsAction = AddMessageType | SelectDialogType

const dialogsReducer = (state = initialState, action: DialogsAction): DialogsState => {

    switch (action.type) {
        case DialogsActionTypes.ADD_MESSAGE:
            const stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            const dialogMessages = stateCopy.activeDialog.messages;
            const msg: DialogsMessage = {
                id: dialogMessages.length ? dialogMessages[dialogMessages.length - 1].id++ : 1,
                time: new Date().toTimeString().substr(0, 9),
                message: action.messageInfo.message,
                userName: action.messageInfo.userName,
                photo: action.messageInfo.photo,
                userId: action.messageInfo.userId
            };
            stateCopy.activeDialog.messages.push(msg);
            return stateCopy;

        case DialogsActionTypes.SELECT_DIALOG:
            state.dialogs.forEach(d => {
                d.isActive = d.id === action.dialogId;
            });
            return {
                ...state,
                dialogs: [...state.dialogs]
            };

        default:
            return state;
    }
}

export default dialogsReducer;