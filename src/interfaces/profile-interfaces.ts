import {IUser} from "./users-interfaces";

export interface IProfile {
    userId: number
    status: string
    username: string
    photo: string
    contacts: IContacts
    posts: IPost[]
    age: number
    followed: boolean
    dateOfBirthday: string | null
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
    title: string,
    text: string,
    date: string,
    user: IUser,
    likeCount: number
}

export interface IPostData {
    title: string,
    text: string,
    file: any
}

export type PostDataKeys = Extract<keyof IPostData, string>
