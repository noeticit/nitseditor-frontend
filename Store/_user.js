import {decrypt, encrypt} from "./../Models/_encrypt";

const state =  {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    role_id: '',
    permissible_pages: [],
    access_token: '',
    refresh_token: '',
    user_id: '',

};

const mutations = {
    STORE_USER_DATA(state, data) {
        state.user_id = data.user_id;
        state.first_name = data.first_name;
        state.last_name = data.last_name;
        state.email = data.email;
        state.role = data.role;
        state.role_id = data.role_id;
        state.access_token = data.access_token;
        state.refresh_token = data.refresh_token;
    },
};

const actions = {
    storeUserData({commit}, userData) {
        //API c
        const user = {
            user_id: userData.user_id ? userData.user_id : '',
            first_name: userData.first_name ? encrypt(userData.first_name) : '',
            last_name: userData.last_name ? encrypt(userData.last_name) : '',
            email: userData.email ? encrypt(userData.email) : '',
            role: userData.role ? encrypt(userData.role) : '',
            role_id: userData.role_id ? userData.role_id : '',
            access_token: userData.access_token ? encrypt(userData.access_token) : '',
            refresh_token: userData.refresh_token ? encrypt(userData.refresh_token) : '',
        };
        commit('STORE_USER_DATA', user);
    },

    removeUserData({commit}) {
        //API c
        const user = {
            user_id: '',
            first_name: '',
            last_name:  '',
            email: '',
            role: '',
            role_id: '',
            access_token: '',
            refresh_token: '',
        };
        commit('STORE_USER_DATA', user);
    }
};

const getters = {
    user_name(state) {
        return decrypt(state.first_name)+ ' '+ decrypt(state.last_name);
    },

    user_first_name(state) {
        return decrypt(state.first_name);
    },

    user_last_name(state) {
        return decrypt(state.last_name);
    },

    user_email(state) {
        return decrypt(state.email);
    },

    user_id(state) {
        return state.user_id;
    },

    user_role(state) {
        return decrypt(state.role);
    },

    user_role_id(state) {
        return state.role_id;
    },

    user_access_token(state) {
        return decrypt(state.access_token);
    },

    user_refresh_token(state) {
        return decrypt(state.refresh_token);
    }
};


export default {
    state, mutations, actions, getters
};
