import axios from "axios";

const API = {
    _url: 'https://social-network.samuraijs.com/api/1.0',
    _instance: axios.create({
        withCredentials: true,
        "API-KEY": "0e19ce1b-03e5-4caa-9644-e65156a21dcd"
    }),

    getUsers(page, pageSize) {
        return this._instance.get(`${this._url}/users?page=${page}&count=${pageSize}`).then(response => response.data);
    },

    getUserInfo(id) {
        return this._instance.get((`${this._url}/profile/${id}`)).then(response => response.data);
    },

    getUserStatus(id) {
        return this._instance.get((`${this._url}/profile/status/${id}`)).then(response => response.data);
    },

    followUser(id) {
        return this._instance.post( `${this._url}/follow/${id})`).then(response => response.data);
    },

    unfollowUser(id) {
        return this._instance.delete( `${this._url}/follow/${id})`).then(response => response.data);
    }
}

export default API;