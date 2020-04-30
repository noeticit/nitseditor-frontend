import axios from 'axios'
import {getHeader} from './_config.js';

export default class {

    /**
     * Send GET Request
     * @param  {string} url
     * @return {Promise}
     */
    get(url) {
        return new Promise((resolve, reject) => {
            axios.get(url, {headers: getHeader()}).then(response => {
                if (response.status === 200) {
                    return resolve(response);
                }
            }).catch((error) => {
                return reject(error);
            })
        });
    }

    /**
     * Send POST Request
     * @param  {string} url
     * @param  {object} payload Data object to send
     * @return {Promise}
     */
    post(url, payload) {
        return new Promise((resolve, reject) => {
            axios.post(url, payload, {headers: getHeader()}).then(response => {
                if (response.status === 200) {
                    return resolve(response);
                }
            }).catch((error) => {
                return reject(error);
            })
        });
    }

    /**
     * Send FIND Request
     * @param  {string} url
     * @return {Promise}
     */
    find(url) {
        return new Promise((resolve, reject) => {
            axios.get(url, {headers: getHeader()}).then(response => {
                if (response.status === 200) {
                    return resolve(response);
                }
            }).catch((error) => {
                return reject(error);
            })
        });
    }

    /**
     * Send POST Request
     * @param  {string} url
     * @param  {object} payload Data object to send
     * @return {Promise}
     */
    create(url, payload) {
        return new Promise((resolve, reject) => {
            axios.post(url, payload, {headers: getHeader()}).then(response => {
                if (response.status === 200) {
                    return resolve(response);
                }
            }).catch((error) => {
                return reject(error);
            })
        });
    }

    /**
     * Send PATCH Request
     * @param  {string} url
     * @param  {object} payload Data Object to send
     * @return {Promise}
     */
    update(url, payload) {
        return new Promise((resolve, reject) => {
            axios.patch(url, payload, {headers: getHeader()}).then(response => {
                if (response.status === 202) {
                    return resolve(response);
                }
            }).catch((error) => {
                return reject(error);
            })
        });
    }

    /**
     * Send DELETE Request
     * @param  {string} url
     * @return {Promise}
     */
    delete(url) {
        return new Promise((resolve, reject) => {
            axios.delete(url, {headers: getHeader()}).then(response => {
                if (response.status === 200) {
                    return resolve(response);
                }
            }).catch((error) => {
                return reject(error);
            })
        });
    }

}