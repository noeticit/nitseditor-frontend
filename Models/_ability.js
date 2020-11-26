import store from "./../Store/_store";

export default class ability {

    checkPageAccess(page) {

        //Free access to page not found.
        if (page.name === 'page-not-found' || page.name === 'nits-admin-not-subscribed')
            return true;

        console.log(store.getters.user_role);

        //check whether admin pages are their
        if(page.name.startsWith('nits-admin-') && (store.getters.user_role === 'God' || store.getters.user_role === 'Super admin')) {
            return true;
        }

        // const guest_permissions = JSON.parse(nitseditor).guest_permissions;
        const guest_permissions = ''

        let p = _.findIndex(guest_permissions, function(o) { return o.name === page.name; });


        if(p > -1) {
            return true;
        }
        else {
            const permissions = store.getters.user_permissions;
            let q = _.findIndex(permissions, function(o) { return o.name === page.name; });

            if(q > -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}