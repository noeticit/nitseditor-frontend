const requirepluginsRoute = require.context('./../routes', true, /nits-plugin-[\w-]+\.js$/);

const pluginRoutes = [];

requirepluginsRoute.keys().forEach(filename => {

    pluginRoutes.push = require(`./../Routes/${filename}`);

});

export default [...pluginRoutes];