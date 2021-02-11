import axios from "axios";

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
        return this._instance.get((`profile/${id}`)).then(response => response.data);
    }

    getUserStatus(id) {
        return this._instance.get((`profile/status/${id}`)).then(response => response.data);
    }

    updateUserStatus(status) {
        return this._instance.put((`profile/status`), {status});
    }
}

class AuthAPI extends API {
    getAuth() {
        return this._instance.get('auth/me').then(response => response.data);
    }

    login(email, password, rememberMe = false) {
        return this._instance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    }

    logout() {
        return this._instance.delete('auth/login').then(response => response.data);
    }
}

const config = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    key: "4d9b271f-9cf4-4f81-8b4d-581142592afa"
}

export const usersAPI = new UsersAPI(config);
export const authAPI = new AuthAPI(config);
export const profileAPI = new ProfileAPI(config);




