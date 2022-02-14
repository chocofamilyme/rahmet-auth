import { globalConfig } from '../../core';
import { AUTH_TYPES, saveAuthData } from '../../utils';

/**
 * Авторизация с помощью track id
 * @param {string} trackId
 */
export default function (trackId) {
    return globalConfig
        .getHttpClient()
        .post(`${globalConfig.getBaseUrl()}/auth/token`, {
            track_id: trackId,
            client_id: globalConfig.getClientId(),
            grant_type: AUTH_TYPES.trackId
        })
        .then(({ data }) =>
            saveAuthData(data.token, data.refresh_token, data.expire_in)
        );
}
