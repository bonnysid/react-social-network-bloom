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
        return this._instance.post( `follow/${id})`).then(response => response.data);
    }

    unfollowUser(id) {
        return this._instance.delete( `follow/${id})`).then(response => response.data);
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
        return this._instance.put((`profile/status`), {status}).then(response => response.data);
    }
}

class AuthAPI extends API {
    getAuth() {
        return this._instance.get('auth/me').then(response => response.data);
    }
}

const config = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    key: "0e19ce1b-03e5-4caa-9644-e65156a21dcd"
}

export const usersAPI = new UsersAPI(config);
export const authAPI = new AuthAPI(config);
export const profileAPI = new ProfileAPI(config);




