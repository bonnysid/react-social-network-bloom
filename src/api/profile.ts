import {IProfile} from "../interfaces/profile-interfaces";
import {instance} from "./constants";
import {ID} from "../interfaces/other-interfaces";

const ProfileAPI = {

    getProfileInfo(id: number | string | null) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },

    getUserStatus(id: number | string | null) {
        return instance.get(`profile/status/${id}`).then(response => response.data);
    },

    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },

    savePhoto(photo: any) {
        const form = new FormData();
        form.append('image', photo);
        return instance.put('profile/photo', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile: IProfile) {
        return instance.put('profile', profile).then(response => response.data);
    },

    createPost(title: string, text: string, date: Date, likeCount: number) {
        return instance.post('users/posts', {
            title,
            text,
            date,
            likeCount
        }).then(response => response.data);
    },

    getPosts(id: ID) {
        return instance.get(`users/posts/${id}`)
    },

    deletePost(id: ID) {
        return instance.delete(`users/posts/${id}`);
    },

    likePost(id: ID) {
        return instance.post(`users/posts/${id}`);
    },

    unlikePost(id: ID) {
        return instance.delete(`users/posts/${id}`);
    }
}

export default ProfileAPI;
