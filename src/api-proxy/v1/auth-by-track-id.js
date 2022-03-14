import { globalConfig } from '../../core';
import { AUTH_TYPES, saveAuthData } from '../../utils';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

/**
 * Авторизация с помощью track id
 * @param {string} trackId
 */
export default async function (trackId) {
    const fpPromise = FingerprintJS.load();

    const fingerPrint = await fpPromise
        .then(fp => fp.get())
        .then(result => result.visitorId);

    return await globalConfig
        .getHttpClient()
        .post(
            `${globalConfig.getBaseUrl()}/api/v1/oauth2/tokens`,
            {
                track_id: trackId,
                client_id: globalConfig.getClientId(),
                grant_type: AUTH_TYPES.trackId
            },
            {
                headers: {
                    'X-Fingerprint': fingerPrint
                }
            }
        )
        .then(({ data }) =>
            saveAuthData(
                data.access_token,
                data.refresh_token,
                data.expires_in,
                fingerPrint
            )
        );
}
