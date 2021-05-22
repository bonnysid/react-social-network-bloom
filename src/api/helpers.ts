import {AxiosInstance} from "axios";

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.token) return {Authorization: 'Bearer ' + user.token}
    else return {};
};

export const updateHeaders = (instance: AxiosInstance) => {
    instance.defaults.headers = authHeader();
}


