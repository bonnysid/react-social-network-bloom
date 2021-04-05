export interface IProfile {
    userId: number,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    aboutMe: string,
    fullName: string,
    photos: IPhotos,
    contacts: IContacts

}

export interface IContacts {
    github: Link,
    vk: Link,
    facebook: Link,
    instagram: Link,
    twitter: Link,
    website: Link,
    youtube: Link,
    mainLink: Link
}

export type Link = string | null

export interface IPhotos {
    small: string | null,
    large: string | null
}

export interface IPost {
    id: number,
    text: string,
    likeCount: number
}