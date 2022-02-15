import getAccessToken from './get-access-token';
import { parseToken } from '../utils';

/**
 * Для получения id пользователя
 * @returns {number|null}
 */
export default function () {
    const parsed = parseToken(getAccessToken());
    return parsed.sub || null;
}
