import Cookies from 'js-cookie';
import { api } from '../api';
import { GATEWAY_URL, TOKEN_KEYS } from '../utils';

/**
 * Авторизация с помощью track id
 * @param {string} payload.trackId
 * @param {string} payload.baseUrl
 * @param {number} payload.clientId
 */
export default function (payload) {
    const url = payload.baseUrl || GATEWAY_URL;

    return api
        .post(`${url}/auth/token`, {
            track_id: payload.trackId,
            client_id: payload.clientId,
            grant_type: 'authorization_track_id'
        })
        .then(response => {
            const data = response.data.data;
            const accessToken = data.token;
            const refreshToken = data.refresh_token;

            Cookies.set(TOKEN_KEYS.access, accessToken, {
                expires: new Date(
                    new Date().getTime() + (data.expire_in || 3600) * 1000
                )
            });

            Cookies.set(TOKEN_KEYS.refresh, refreshToken, {
                expires: 7
            });

            return {
                accessToken,
                refreshToken
            };
        })
        .catch(error => {
            throw error;
        });
}
