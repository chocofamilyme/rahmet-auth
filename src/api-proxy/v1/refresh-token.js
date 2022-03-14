import { globalConfig } from '../../core';
import { AUTH_TYPES, saveAuthData } from '../../utils';
import Cookies from 'js-cookie';

/**
 * Авторизация с помощью track id
 * @param {string} trackId
 */
export default function (trackId) {
    return globalConfig
        .getHttpClient()
        .post(
            `${globalConfig.getBaseUrl()}/api/v1/oauth2/tokens`,
            {
                client_id: globalConfig.getClientId(),
                grant_type: AUTH_TYPES.trackId,
                refresh_token: Cookies.get('refreshToken')
            },
            {
                headers: {
                    'X-Fingerprint': Cookies.get('fingerPrint')
                }
            }
        )
        .then(({ data }) =>
            // TODO: Нужно ли сохранять еще раз refresh_token ???
            saveAuthData(data.access_token, data.refresh_token, data.expires_in)
        );
}
