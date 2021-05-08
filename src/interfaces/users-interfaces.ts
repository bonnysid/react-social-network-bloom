import {IPhotos} from "./profile-interfaces";

export interface IUser {
    email: string
    followed: boolean
    id: number
    photo: null | string
    status: null | string
    username: string
}

export type Users = IUser[];
export type ToggleFollowType = (id: number) => void;