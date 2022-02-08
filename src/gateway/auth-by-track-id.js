import Cookies from 'js-cookie';
import { api } from '../api';
import { globalConfig } from '../core';
import { TOKEN_KEYS } from '../utils';

/**
 * Авторизация с помощью track id
 * @param {string} trackId
 */
export default function (trackId) {
    return api
        .post(`${globalConfig.getGatewayURL()}/auth/token`, {
            track_id: trackId,
            client_id: globalConfig.getClientId(),
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
                expires: 60
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
