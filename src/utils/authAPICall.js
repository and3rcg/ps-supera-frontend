import axiosInstance from './axiosInstance';

export function authAPIGet(endpoint) {
    const apiPromise = axiosInstance.get(`/${endpoint}`);
    const responseData = apiPromise.then((response) => response.data).catch((e) => console.log(e));
    return responseData;
}

export function authAPIPost(endpoint) {
    const apiPromise = axiosInstance.post(`/${endpoint}`);
    const responseData = apiPromise.then((response) => response.data).catch((e) => console.log(e));
    return responseData;
}

export function authAPIPatch(endpoint) {
    const apiPromise = axiosInstance.patch(`/${endpoint}`);
    const responseData = apiPromise.then((response) => response.data).catch((e) => console.log(e));
    return responseData;
}

export function authAPIDelete(endpoint) {
    const apiPromise = axiosInstance.delete(`/${endpoint}`);
    const responseData = apiPromise.then((response) => response.data).catch((e) => console.log(e));
    return responseData;
}
