import getAccessToken from './get-access-token';
import { parseToken } from '../utils';

export default function () {
    const parsed = parseToken(getAccessToken());
    return parsed.sub || null;
}
