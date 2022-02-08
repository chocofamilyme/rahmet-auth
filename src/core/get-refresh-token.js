import Cookies from 'js-cookie';
import { TOKEN_KEYS } from '../utils';

/**
 * @returns {string}
 */
export default function () {
    return Cookies.get(TOKEN_KEYS.refresh) || '';
}
