import VueSession from './_session.js';
import store from './../Store/_store';

const session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);

export const getHeader = function () {
    // const tokenData = session.get('auth_user')
    return {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + store.getters.user_access_token
    };
};

export const clientId = process.env.MIX_CLIENT_ID;

export const clientSecret = process.env.MIX_CLIENT_SECRET;

export const appUrl = process.env.MIX_APP_URL;

export const appResource = 'check';

const tokenData = session.get('auth_user');

export const accessToken = store.getters.user_access_token;
