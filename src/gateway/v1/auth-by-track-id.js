import { api } from '../../api';
import { globalConfig } from '../../core';
import { saveAuthData } from '../../utils';

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
        .then(({ data }) =>
            saveAuthData(data.token, data.refresh_token, data.expire_in)
        );
}
