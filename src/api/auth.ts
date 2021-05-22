import {instance} from "./constants";
import {updateHeaders} from "./helpers";

const AuthAPI = {
    getAuth() {
        return instance.get('auth/me');
    },

    login(username: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post('auth/login', {username, password, rememberMe, captcha})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                updateHeaders(instance)
                return response.data
            });
    },

    logout() {
        localStorage.removeItem('user')
        return instance.post('auth/logout').then(response => response.data);
    },

    register(email: string, username: string, password: string) {
        return instance.post('auth/signup', {
            username,
            email,
            password
        })
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user') || '{}')
    },

    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
};

export default AuthAPI;
