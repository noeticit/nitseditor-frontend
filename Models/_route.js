import flattenDeep from 'lodash/flattenDeep';

const requireRouteFiles = require.context('./../Routes', true, /nits-[\w-]+\.js$/);

const routes = [];

requireRouteFiles.keys().forEach(filename => {

    //Get file location to import
    const importFilename = filename.replace('./', '');

    routes.push(require(`./../Routes/${importFilename}`).default);

});

export default [...flattenDeep(routes)];