import {encrypt} from "./_encrypt";
import {getHeader} from "./_config";
import store from "./../Store/_store";
import VueSession from './_session';

let session = new VueSession(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);

export default class auth {

    //Finding logged-in user.
    isLoggedIn() {
        const tokenData = session.get('auth_user');
        return !!(tokenData && tokenData.access_token);
    }

    //Login
    login(user) {
        return new Promise((resolve, reject) => {

            const authUser = {}

            const postData = {
                grant_type: 'password',
                username: user.email,
                password: user.password,
                client_id: process.env.MIX_CLIENT_ID,
                client_secret: process.env.MIX_CLIENT_SECRET,
                scope: ''
            };
            axios.post('/nits-system-api/login', postData).then(response => {
                if (response.status === 200) {
                    authUser.access_token = encrypt(response.data.access_token);
                    authUser.refresh_token = encrypt(response.data.refresh_token);
                    authUser.user_id = response.data.user_id;
                    authUser.first_name = encrypt(response.data.first_name);
                    authUser.last_name = encrypt(response.data.last_name);
                    authUser.email = encrypt(response.data.email);
                    authUser.role = encrypt(response.data.role);
                    authUser.role_id = response.data.role_id;
                    session.set('auth_user', authUser);
                    session.set('permissible_pages', response.data.permissible_pages);

                    store.dispatch('storeUserData', response.data);

                    resolve({
                        redirect: '/dashboard'
                    });
                }
            }).catch((error) => {
                return reject(error);
            })
        })
    }

    //For Logout..
    logout() {
        session.remove('authUser');
        return true;
    }

    //registration..
    registration(user) {
        //Call registration API, once done redirect them to login page.
        return new Promise((resolve, reject)  => {
            const userData = {
                first_name: user.first_name,
                email: user.email,
                mobile: user.mobile,
                password: user.password,
            }
            //User log request....
            axios.post('user/registration', userData).then(response => {
                if(response.status === 200)
                {
                    resolve('User Successfully Registered')
                }
            }).catch( (err) => {
                return reject(err);
            })
        })
    }

}
