import {IProfile} from "../interfaces/profile-interfaces";
import {instance} from "./constants";

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

    createPost(title: string, text: string, date: string) {
        return instance.post('posts', {
            title,
            text,
            date
        }).then(response => response.data);
    }
}

export default ProfileAPI;
