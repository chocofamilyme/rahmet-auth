import getAccessToken from './get-access-token';

/**
 * Авторизован ли пользователь
 * @returns {boolean}
 */
export default function () {
    return !!getAccessToken();
}
