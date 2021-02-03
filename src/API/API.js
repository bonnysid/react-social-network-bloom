import axios from "axios";

const API = {
    _instance: axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        "API-KEY": "0e19ce1b-03e5-4caa-9644-e65156a21dcd"
    }),

    getUsers(page = 1, pageSize = 10) {
        return this._instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
    },

    getUserInfo(id) {
        return this._instance.get((`/profile/${id}`)).then(response => response.data);
    },

    getUserStatus(id) {
        return this._instance.get((`/profile/status/${id}`)).then(response => response.data);
    },

    followUser(id) {
        return this._instance.post( `/follow/${id})`).then(response => response.data);
    },

    unfollowUser(id) {
        return this._instance.delete( `/follow/${id})`).then(response => response.data);
    },

    getAuth() {
        return this._instance.get('/auth/me').then(response => response.data);
    }
}

export default API;