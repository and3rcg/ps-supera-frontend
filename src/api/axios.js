import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/'; // API url

const axiosInstance = axios.create({
    baseURL: baseURL,
});
// axiosInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
// axiosInstance.defaults.headers.post['accept'] = 'application/json';
// axiosInstance.defaults.headers.post['Access-Control-Allow-Credentials'] = true;

export default axiosInstance;
