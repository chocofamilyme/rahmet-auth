import parseToken from './parse-token';

/**
 * Валидация JWT-токена
 * @param {string} token - JWT-токен
 * @returns {boolean}
 */
export default function (token) {
    const parsed = parseToken(token);

    if (parsed.exp) {
        return parsed.exp * 1000 > Date.now();
    }

    return false;
}
