import store from "../../redux/reduxStore";

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
    small: string,
    large: string
}

export interface IData {
    resultCode: number
}

export type Messages = IMessage[];

export type DispatchType = typeof store.dispatch