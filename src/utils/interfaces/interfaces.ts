import store from "../../redux/reduxStore";
import {AppAction} from "../../redux/reducers/appReducer";
import {AuthAction} from "../../redux/reducers/authReducer";
import {UsersAction} from "../../redux/reducers/usersReducer";
import {DialogsAction} from "../../redux/reducers/dialogsReducer";
import {NavbarAction} from "../../redux/reducers/navbarReducer";
import {ProfileAction} from "../../redux/reducers/profileReducer";

export interface IAuthUserInfo {
    id: number | null,
    email: string | null,
    login: string | null
}

export interface IMessage {
    message: string,
    photo: string | null,
    userId: number,
    userName: string
}

export interface IMenuItem {
    title: string,
    link: string
}

export interface IProfile {
    userId: number | null
    lookingForAJob: number | null
    lookingForAJobDescription: number | null
    fullName: number | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

}

export interface IPhotos {
    small: string | null,
    large: string | null
}

export interface IAction<T, R> {
    type: T,
    payload: R
}

export interface IData {
    resultCode: number
}

export interface IUser {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: IPhotos,
    status: string | null,
    followed: boolean
}

export type ApiMethod = (data: any) => Promise<any>

export type Messages = IMessage[];

export type Users = IUser[];

export type DispatchType = typeof store.dispatch

export type ActionCreator = AppAction | AuthAction | UsersAction | DialogsAction | NavbarAction | ProfileAction;