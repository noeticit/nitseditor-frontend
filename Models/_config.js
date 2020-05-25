import {decrypt} from './_encrypt.js';
import VueSession from './_session.js';
import store from './../Store/_store';

const session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);

export const getHeader = function () {
    // const tokenData = session.get('auth_user')
    console.log(store.getters.user_access_token);
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + store.getters.user_access_token
    };
    console.log(headers);
    return headers;
};

export const clientId = process.env.MIX_CLIENT_ID;

export const clientSecret = process.env.MIX_CLIENT_SECRET;

export const appUrl = process.env.MIX_APP_URL;

export const appResource = 'check';

const tokenData = session.get('auth_user');

export const accessToken = store.getters.user_access_token;
