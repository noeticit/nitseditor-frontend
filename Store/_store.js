import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

import user from './_user';

Vue.use(Vuex);
const  debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        user
    },
    plugins: [
        createPersistedState()
        // createPersistedState({
        //     storage: {
        //         getItem: (key) => Cookies.get(key),
        //         // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        //         setItem: (key, value) =>
        //             Cookies.set(key, value, { expires: 3, secure: false }),
        //         removeItem: (key) => Cookies.remove(key),
        //     },
        // }),
    ],
    strict: debug
});
