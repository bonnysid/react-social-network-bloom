export interface IProfile {
    userId: number
    status: string
    username: string
    photo: string
    contacts: IContacts
    posts: IPost[]
    age: number
    followed: boolean
    dateOfBirthday: string
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

export interface IPostData {
    message: string,
    file: any
}

export type PostDataKeys = Extract<keyof IPostData, string>