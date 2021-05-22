import axios from "axios";
import {authHeader} from "./helpers";

export const BASE_URL = 'http://localhost:8080/api/1.0/';
export const CHAT_URL = 'http://localhost:8080';
export const instance = axios.create({
    baseURL: BASE_URL,
    headers: authHeader()
});
