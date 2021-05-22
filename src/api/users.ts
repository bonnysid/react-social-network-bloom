import {instance} from "./constants";

const UsersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
    },

    getFriends() {
        return instance.get(`friends`);
    },

    followUser(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}

export default UsersAPI;
