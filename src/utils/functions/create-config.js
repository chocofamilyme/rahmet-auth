import { GATEWAY_URL } from '../constants';

export default function () {
    let gatewayUrl = GATEWAY_URL;
    let clientId = 0;

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

    return Object.freeze({
        getGatewayUrl,
        setGatewayUrl,
        getClientId,
        setClientId
    });
}
