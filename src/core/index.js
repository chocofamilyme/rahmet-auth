import { createConfig } from '../utils';

const globalConfig = createConfig();
export { globalConfig };

export { default as getAccessToken } from './get-access-token';
export { default as getRefreshToken } from './get-refresh-token';
export { default as logout } from './logout';
export { default as parseToken } from './parse-token';
export { default as validateToken } from './validate-token';
