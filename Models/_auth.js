import store from "./../Store/_store";

export default class auth {

    //Finding logged-in user.
    isLoggedIn() {
        return !!(store.getters.user_access_token());
    }

    //Login
    login(user) {
        return new Promise((resolve, reject) => {

            const postData = {
                grant_type: 'password',
                username: user.email,
                password: user.password,
                client_id: process.env.MIX_CLIENT_ID,
                client_secret: process.env.MIX_CLIENT_SECRET,
                scope: ''
            };
            store.dispatch('removeUserData');
            axios.post('/nits-system-api/login', postData).then(response => {
                if (response.status === 200) {
                    store.dispatch('storeUserData', response.data);

                    resolve({
                        redirect: '/dashboard'
                    });
                }
            }).catch((error) => {
                return reject(error);
            });
        });
    }

    //For Logout..
    logout() {
        store.dispatch('removeUserData');
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
