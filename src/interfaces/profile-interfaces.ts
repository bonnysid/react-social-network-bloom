export interface IMessage {
    message: string,
    photo: string | null,
    userId: number,
    userName: string
}

export interface IProfile {
    userId: number
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    photos: IPhotos
    contacts: keyof IContacts

}

export type IContacts = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export interface IPhotos {
    small: string | null,
    large: string | null
}