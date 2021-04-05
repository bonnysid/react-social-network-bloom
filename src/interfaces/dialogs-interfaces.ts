export interface IMessage {
    id: number,
    text: string,
    fromUsername: string,
    date: string
}

export interface IDialog {
    id: number,
    username: string,
    photo: string | null,
    message: IMessage | null
}

export interface IDialogsState {
    dialogs: IDialog[],
    idActiveDialog: number | null,
    messages: IMessage[]
}

export type Messages = IMessage[];