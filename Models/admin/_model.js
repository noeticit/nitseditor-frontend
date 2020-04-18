import _ from 'lodash';

export const menu = function (currentNav) {
    var menu_type = _.find(JSON.parse(nitseditor).all_menu, (o) => {
        return o.link === currentNav;
    })
    if(typeof menu_type === 'undefined' || menu_type.menu_location === 'main_menu')
        var main_menu = _.filter(JSON.parse(nitseditor).menu, function(o) { return o.menu_location === 'main_menu'; });
    else if(menu_type.menu_location === 'analytics_menu')
        var main_menu = _.filter(JSON.parse(nitseditor).menu, function(o) { return o.menu_location === 'analytics_menu'; });

    var menu = main_menu.map(a => ({
        name: a.name,
        link: a.link,
        icon: a.icon,
        permission: _.snakeCase(a.name.replace(/\s/g, '')),
        sub_menu: a.children.length ? a.children.map(b => ({
            name: b.name,
            link: b.link,
            icon: b.icon,
            permission: _.snakeCase(b.name.replace(/\s/g, '')),
            sub_menu: b.children.length ? b.children.map(c => ({
                name: c.name,
                link: c.link,
                icon: c.icon,
                permission: _.snakeCase(c.name.replace(/\s/g, '')),
    })) : []
        })) : []
    }));
// console.log(menu)
    let auth_user = session.get('auth_user');
    var role = decrypt(auth_user.role);
    var permission_given=session.get('permission')

    if(role === 'Subscriber'){

        var arr = Object.keys(permission_given);

        //2. Filter according to above permission array, we will make one single array and check with includes parameters.
        let data = _.filter(menu, function (a) {
            return arr.includes(a.permission);
        })
        if( typeof menu_type === 'undefined' || menu_type.menu_location === 'main_menu')
            data.push({name: 'Biltrax Analytics', link: '/dashboard-biltrax-analytics', icon: 'flaticon2-protection'});
        else if(menu_type.menu_location === 'analytics_menu')
            data.push({name: 'Search Data', link: '/dashboard', icon: 'flaticon2-protection'});

        return data;
    }
    else{

        if( typeof menu_type === 'undefined' || menu_type.menu_location === 'main_menu')
            menu.push({name: 'Biltrax Analytics', link: '/dashboard-biltrax-analytics', icon: 'flaticon2-protection'});
        else if(menu_type.menu_location === 'analytics_menu')
            menu.push({name: 'Search Data', link: '/dashboard', icon: 'flaticon2-protection'});

        return menu;
    }
    //Filter as per the permission chart (foreach permision loop)

};


import {encrypt, decrypt} from "NitsModels/_encrypt";
import {getHeader} from "NitsModels/_config";
import store from "./../../Store/_store";
// import ability from "NitsModels/_ability";
import VueSession from 'NitsModels/_session';

const session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);
// session.start();

export const login = function(user) {
    return new Promise((resolve, reject) => {

        var permission={};
        const auth_user = {};

        const postData = {
            grant_type: 'password',
            username: user.email,
            password: user.password,
            client_id: process.env.MIX_CLIENT_ID,
            client_secret: process.env.MIX_CLIENT_SECRET,
            scope: ''
        };

        axios.post('/oauth/token', postData).then(response => {
            if (response.status === 200) {
                auth_user.access_token = encrypt(response.data.access_token);
                auth_user.refesh_token = encrypt(response.data.refresh_token);
                session.set('auth_user', auth_user);
                // window.localStorage.setItem('auth_user', JSON.stringify(auth_user));

                axios.get('/nits-system-api/user', {headers: getHeader()}).then(response => {
                    if(response.status === 200)
                    {
                        auth_user.first_name = encrypt(response.data.data.first_name);
                        auth_user.last_name = encrypt(response.data.data.last_name);
                        auth_user.email = encrypt(response.data.data.email);
                        auth_user.role = encrypt(response.data.data.role);

                        let lastURL=session.get('last_url');
                        console.log(lastURL);
                        if(response.data.data.role === 'Super admin')
                        {
                            //Storing permissions into localstorage
                            // ability.update(response.data.data.permissions);

                            //Storing into local storage.
                            session.set('auth_user', auth_user);
                            // window.localStorage.setItem('auth_user', JSON.stringify(auth_user));
                            //Storing to state.
                            store.commit("STORE_USER_DATA", auth_user);

                            if(typeof lastURL !=='undefined' && lastURL !== null) {
                                const redirect = {
                                    redirect: lastURL

                                };
                                session.set('last_url', null);
                                resolve(redirect);
                            }
                            else{
                                // console.log('check')
                                const redirect = {
                                    redirect: '/nits-admin/dashboard'
                                };
                                resolve(redirect);
                             }
                        }
                        else {
                            if(response.data.data.role === 'Subscriber' && response.data.data.access === 1) {
                                session.set('auth_user', auth_user);
                                axios.get('/laravel-api/permissions', {headers: getHeader()}).then(response => {
                                    if(response.status === 200)
                                    {
                                        permission=response.data;
                                        //filter for permission from permission api
                                        Object.filter = (obj, predicate) =>
                                            Object.keys(obj)
                                                .filter( key => predicate(obj[key]) )
                                                .reduce( (res, key) => (res[key] = obj[key], res), {} );

                                        //1. Filter permissions from API which has 1/true value
                                        var filtered_permission = Object.filter(permission, permissions => permissions === 1);
                                        // window.localStorage.setItem('filtered_permission', JSON.stringify(filtered_permission));
                                        session.set('permission',filtered_permission);
                                        if(typeof lastURL !=='undefined' && lastURL !== null) {
                                            const redirect = {
                                                redirect: lastURL

                                            };
                                            session.set('last_url', null);
                                            resolve(redirect);
                                        }
                                        else{
                                            const redirect = {
                                                redirect: '/nits-admin/dashboard'
                                            };
                                            resolve(redirect);
                                        }

                                    }
                                });
                            }
                            else {
                                const error = 'Login not allowed';
                                reject(error);
                            }
                        }
                    }
                }).catch((err) => {
                    if(err.response.status === 401){
                        const error = err.response.data.message;
                        reject(error);
                    }
                    if(err.response.status === 500) {
                        const error = 'Server error, please try after sometime.';
                        reject(error);
                    }
                    if(err.response.status === 400) {
                        const error = 'Environment variable missing. Check and retry.';
                        reject(error);
                    }
                })
            }
        }).catch((err) => {
            if(err.response.status === 401){
                const error = err.response.data.message;
                reject(error);
            }
            if(err.response.status === 500) {
                const error = 'Server error, please try after sometime.';
                reject(error);
            }
            if(err.response.status === 400) {
                const error = 'Environment variable missing. Check and retry.';
                reject(error);
            }
        })

    })
};
