import createHttpClient from './create-http-client';

export default function () {
    let baseUrl = 'localhost';
    let clientId = 0;
    let httpClient = createHttpClient();

    const getBaseUrl = () => {
        return baseUrl;
    };

    const setBaseUrl = url => {
        baseUrl = url;
    };

    const getClientId = () => {
        return clientId;
    };

    const setClientId = id => {
        clientId = id;
    };

    const getHttpClient = () => {
        return httpClient;
    };

    const setHttpClient = client => {
        httpClient = client;
    };

    return Object.freeze({
        getBaseUrl,
        setBaseUrl,
        getClientId,
        setClientId,
        getHttpClient,
        setHttpClient
    });
}
