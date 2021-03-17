import store from "../../redux/reduxStore";

export interface IAuthUserInfo {
    id: number,
    email: string,
    login: string
}

export interface IMessage {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

export interface IMenuItem {
    title: string,
    link: string
}

export type Messages = IMessage[];

export type DispatchType = typeof store.dispatch