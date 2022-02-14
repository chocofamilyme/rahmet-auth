/**
 * Парсинг JWT-токена
 * @param {string} token - JWT-токен
 * @returns {object}
 */
export default function (token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch {
        return {};
    }
}
