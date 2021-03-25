import axios from "axios";
import {ApiMethod} from "../interfaces/other-interfaces";

class API {
    constructor(props) {
        this._instance = axios.create({
            withCredentials: props.withCredentials,
            baseURL: props.baseURL,
            "API-KEY": props.key
        })

    }
}

class UsersAPI extends API {
    getUsers(page = 1, pageSize = 10) {
        return this._instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
    }

    followUser(id) {
        return this._instance.post( `follow/${id}`).then(response => response.data);
    }

    unfollowUser(id) {
        return this._instance.delete( `follow/${id}`).then(response => response.data);
    }
}

class ProfileAPI extends API {

    getProfileInfo(id) {
        return this._instance.get(`profile/${id}`).then(response => response.data);
    }

    getUserStatus(id) {
        return this._instance.get(`profile/status/${id}`).then(response => response.data);
    }

    updateUserStatus(status) {
        return this._instance.put(`profile/status`, {status});
    }

    savePhoto(photo) {
        const form = new FormData();
        form.append('image', photo);
        return this._instance.put('profile/photo', form, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    }

    saveProfile(profile) {
        return this._instance.put('profile', profile).then(response => response.data);
    }
}

class AuthAPI extends API {
    getAuth() {
        return this._instance.get('auth/me').then(response => response.data);
    }

    login(email, password, rememberMe = false, captcha = null) {
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




