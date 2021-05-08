import axios, {AxiosInstance} from "axios";
import {IProfile} from "../interfaces/profile-interfaces";

export interface ApiProps {
    baseURL: string
}

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.token) return {Authorization: 'Bearer ' + user.token}
    else return {};
}

class API {
    _instance: AxiosInstance

    constructor(props: ApiProps) {
        this._instance = axios.create({
            baseURL: props.baseURL,
            headers: authHeader()
        })

    }
}

class UsersAPI extends API {
    getUsers(page = 1, pageSize = 10) {
        console.log(authHeader())
        return this._instance.get(`users?page=${page}&count=${pageSize}`, {headers: authHeader()}).then(response => response.data);
    }

    followUser(id: number) {
        return this._instance.post(`follow/${id}`).then(response => response.data);
    }

    unfollowUser(id: number) {
        return this._instance.delete(`follow/${id}`).then(response => response.data);
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
                'Content-Type': 'multipart/form-data'
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

    login(username: string, password: string, rememberMe = false, captcha: string | null = null) {
        return this._instance.post('auth/login', {username, password, rememberMe, captcha})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            });
    }

    logout() {
        localStorage.removeItem('user')
        return this._instance.delete('auth/login').then(response => response.data);
    }

    register(email: string, username: string, password: string) {
        return this._instance.post('auth/register', {
            username,
            email,
            password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user') || '{}')
    }
}

class SecurityAPI extends API {
    getCaptcha() {
        return this._instance.get('security/get-captcha-url').then(response => response.data)
    }
}

const config = {
    baseURL: 'http://localhost:8080/api/1.0/'
}

export const usersAPI = new UsersAPI(config);
export const authAPI = new AuthAPI(config);
export const profileAPI = new ProfileAPI(config);
export const securityAPI = new SecurityAPI(config);




