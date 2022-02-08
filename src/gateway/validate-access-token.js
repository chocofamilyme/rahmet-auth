import { api } from '../api';
import { getAccessToken } from '../core';
import { GATEWAY_URL } from '../utils';

/**
 * Валидация токена
 * @param {string} baseUrl
 * @returns {boolean}
 */
export default function (baseUrl = GATEWAY_URL) {
    return new Promise(resolve => {
        if (!getAccessToken()) {
            resolve(false);
        } else {
            api.post(`${baseUrl}/gateway/oauth/token/validate`)
                .then(response => {
                    const { error_code: code, status } = response.data;
                    resolve(code === 0 && status === 'success');
                })
                .catch(() => resolve(false));
        }
    });
}
