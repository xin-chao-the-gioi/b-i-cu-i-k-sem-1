import axios from 'axios';

const URL = "http://localhost:9090/user";

export const register = (user) => {
    return axios.post(URL, user);
}   

export const getUsers = () => {
    return axios.get(URL);
}