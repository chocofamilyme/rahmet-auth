import { GATEWAY_URL } from '../constants';

export default function () {
    let gatewayURL = GATEWAY_URL;
    let clientId = 0;

    let responseSuccessCb = () => {};
    let responseErrorCb = () => {};

    const getGatewayURL = () => {
        return gatewayURL;
    };

    const setGatewayURL = url => {
        gatewayURL = url;
    };

    const getClientId = () => {
        return clientId;
    };

    const setClientId = id => {
        clientId = id;
    };

    const setResponseSuccessCb = cb => {
        responseSuccessCb = cb;
    };

    const setResponseErrorCb = cb => {
        responseErrorCb = cb;
    };

    return Object.freeze({
        getGatewayURL,
        setGatewayURL,
        getClientId,
        setClientId,
        setResponseSuccessCb,
        setResponseErrorCb
    });
}
