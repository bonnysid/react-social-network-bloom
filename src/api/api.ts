import axios, { AxiosInstance } from "axios";
import {IProfile} from "../interfaces/profile-interfaces";

export interface ApiProps {
    withCredentials: boolean
    baseURL: string
    key: string
}

class API {
    _instance: AxiosInstance

    constructor(props: ApiProps) {
        this._instance = axios.create({
            withCredentials: props.withCredentials,
            baseURL: props.baseURL,
            headers: {
                "API-KEY": props.key
            }
        })

    }
}

class UsersAPI extends API {
    getUsers(page = 1, pageSize = 10) {
        return this._instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
    }

    followUser(id: number) {
        return this._instance.post( `follow/${id}`).then(response => response.data);
    }

    unfollowUser(id: number) {
        return this._instance.delete( `follow/${id}`).then(response => response.data);
    }
}

class ProfileAPI extends API {

    getProfileInfo(id: number | string | null) {
        return this._instance.get(`profile/${id}`).then(response => response.data);
    }

    getUserStatus(id: number | string | null) {
        return this._instance.get(`profile/status/${id}`).then(response => response.data);
    }

    updateUserStatus(status: string) {
        return this._instance.put(`profile/status`, {status});
    }

    savePhoto(photo: any) {
        const form = new FormData();
        form.append('image', photo);
        return this._instance.put('profile/photo', form, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    }

    saveProfile(profile: IProfile) {
        return this._instance.put('profile', profile).then(response => response.data);
    }
}

class AuthAPI extends API {
    getAuth() {
        return this._instance.get('auth/me').then(response => response.data);
    }

    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return this._instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data);
    }

    logout() {
        return this._instance.delete('auth/login').then(response => response.data);
    }
}

class SecurityAPI extends API{
    getCaptcha(){
        return this._instance.get('security/get-captcha-url').then(response => response.data)
    }
}

const config = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    key: "eca71e62-40e5-487f-ace5-c7bb6153f79f"
}

export const usersAPI = new UsersAPI(config);
export const authAPI = new AuthAPI(config);
export const profileAPI = new ProfileAPI(config);
export const securityAPI = new SecurityAPI(config);




