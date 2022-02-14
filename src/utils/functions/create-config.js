export default function () {
    let baseUrl = 'localhost';
    let clientId = 0;

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

    return Object.freeze({
        getBaseUrl,
        setBaseUrl,
        getClientId,
        setClientId
    });
}
