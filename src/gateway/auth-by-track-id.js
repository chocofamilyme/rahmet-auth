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
        .post(`${globalConfig.getGatewayUrl()}/auth/token`, {
            track_id: trackId,
            client_id: globalConfig.getClientId(),
            grant_type: 'authorization_track_id'
        })
        .then(response => {
            const { accessToken, refreshToken } = response.data;

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
        });
}
