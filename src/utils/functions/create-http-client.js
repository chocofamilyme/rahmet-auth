import axios from 'axios';
import { stringify } from 'qs';

/**
 * Создание Axios instance по умолчанию
 */
export default function () {
    const client = axios.create({
        paramsSerializer: stringify,
        transformRequest: [data => JSON.stringify(data)]
    });

    client.interceptors.request.use(
        config => {
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => Promise.reject(error)
    );

    client.interceptors.response.use(
        response => {
            const data = response.data;
            return data.error_code ? Promise.reject(data) : data;
        },
        error => Promise.reject(error)
    );

    return client;
}
