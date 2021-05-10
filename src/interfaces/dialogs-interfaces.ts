import {IUser} from "./users-interfaces";

export interface IMessage {
    id: number
    text: string
    fromUsername: string
    date: string
}

export interface IDialog {
    id: number
    username: string
    photo: string | null
    message: IMessage | null
}

export interface IDialogsState {
    isFetching: boolean
    dialogs: IDialog[]
    idActiveDialog: number | null
    messages: IMessage[]
    friends: IUser[]
}

export interface IMessageData {
    message: string
    file: any
}

export type IMessageDataKeys = Extract<keyof IMessageData, string>

export type Messages = IMessage[];