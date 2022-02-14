import { globalConfig } from '../../core';
import { saveAuthData } from '../../utils';

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
            grant_type: 'authorization_track_id'
        })
        .then(({ data }) =>
            saveAuthData(data.token, data.refresh_token, data.expire_in)
        );
}
