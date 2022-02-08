import Cookies from 'js-cookie';
import { TOKEN_KEYS } from '../constants';

/**
 * Очищает авторизационные данные
 */
export default function () {
    Cookies.remove(TOKEN_KEYS.access);
    Cookies.remove(TOKEN_KEYS.refresh);
}
