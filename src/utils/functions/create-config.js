import { GATEWAY_URL } from '../constants';

export default function () {
    let gatewayUrl = GATEWAY_URL;
    let clientId = 0;
    let responseErrorCb = () => {};

    const getGatewayUrl = () => {
        return gatewayUrl;
    };

    const setGatewayUrl = url => {
        gatewayUrl = url;
    };

    const getClientId = () => {
        return clientId;
    };

    const setClientId = id => {
        clientId = id;
    };

    const handleErrorResponse = (...args) => {
        return responseErrorCb(...args);
    };

    const setResponseErrorCb = cb => {
        responseErrorCb = cb;
    };

    return Object.freeze({
        getGatewayUrl,
        setGatewayUrl,
        getClientId,
        setClientId,
        handleErrorResponse,
        setResponseErrorCb
    });
}
