import Cookies from 'js-cookie';
import { TOKEN_KEYS, EXPIRE_SECONDS, REFRESH_EXPIRE_DAYS } from '../constants';

/**
 *
 * @param {string} access - access токен
 * @param {string} refresh - refresh токен
 * @param {number} expire - срок жизни access в секундах
 * @returns {object}
 */
export default function (access, refresh, expire) {
    // сохранение access
    Cookies.set(TOKEN_KEYS.access, access, {
        expires: new Date(
            new Date().getTime() + (expire || EXPIRE_SECONDS) * 1000
        )
    });

    // сохранение refresh
    Cookies.set(TOKEN_KEYS.refresh, refresh, {
        expires: REFRESH_EXPIRE_DAYS
    });

    return {
        access,
        refresh
    };
}
