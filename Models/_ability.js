export default class ability {

    constructor() {
        this.PERMISSIONS = [];
    }

    check(role, page) {
        let p = _.filter(this.PERMISSIONS, function(o) { return o.name === page; });

        return typeof p[role] !== 'undefined' || p[role] === true;
    }
}