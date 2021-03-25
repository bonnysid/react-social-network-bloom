import {IPhotos} from "./profile-interfaces";

export interface IUser {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: IPhotos,
    status: string | null,
    followed: boolean
}

export type Users = IUser[];
export type ToggleFollowType = (id: number) => void;