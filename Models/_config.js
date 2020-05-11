import {decrypt} from './_encrypt.js';
import VueSession from './_session.js';

const session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);

const tokenData = session.get('auth_user');

export const getHeader = function () {
    const tokenData = session.get('auth_user')
    const headers = {
        'Accept': 'application/json',
        'Authorization': tokenData ? 'Bearer ' + decrypt(tokenData.access_token) : null
    };
    // console.log(headers);
    return headers;
};

export const clientId = process.env.MIX_CLIENT_ID;

export const clientSecret = process.env.MIX_CLIENT_SECRET;

export const appUrl = process.env.MIX_APP_URL;

export const appResource = 'check';

export const accessToken = tokenData ? decrypt(tokenData.access_token) : null;
