import axios from 'axios';
import { stringify } from 'qs';

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
    return data.error_code ? Promise.reject(data) : response;
  },
  error => Promise.reject(error)
);

export { api };
