import axios from 'axios';
import { stringify } from 'qs';
import { globalConfig } from '../core';

const api = axios.create({
    paramsSerializer: stringify,
    transformRequest: [data => JSON.stringify(data)]
});

api.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => {
        const data = response.data;

        if (data.error_code) {
            return Promise.reject(globalConfig.handleErrorResponse(response));
        }

        return data;
    },
    error => Promise.reject(error)
);

export { api };
