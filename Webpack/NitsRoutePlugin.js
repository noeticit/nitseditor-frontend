const fs = require('fs');
const { generateRoutes } = require('vue-route-generator');
const configs = require(path.resolve('./nits.config'));

function NitsRoutePlugin () {}

NitsRoutePlugin.prototype.apply = function (compiler) {

    exportProjectPages();

    exportNitsAdminPages();

    exportPluginsPages();

};

/* Define function for escaping user input to be treated as
   a literal string within a regular expression */
function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* Define functin to find and replace specified term with replacement string */
function replaceAll(str, term, replacement) {
    return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

function exportProjectPages() {

    console.log('Generating routes for projects page');

    const projectRouteCode = generateRoutes({
        pages: './resources/pages', // Vue page component directory

        importPrefix: 'ProjectPages/',

        dynamicImport: true
    });

    fs.writeFileSync(path.resolve(__dirname, '../Routes/nits-project-routes.js'), projectRouteCode);

}

function exportNitsAdminPages() {

    console.log('Generating routes for nits admin pages');

    const nitsAdminRouteCode = generateRoutes({
        pages: path.resolve(__dirname, './../Pages'), // Vue page component directory

        importPrefix: 'NitsAdminPages/',

        dynamicImport: true
    });

    const componentName = replaceAll(nitsAdminRouteCode, 'name: \'', 'name: \'nits-admin-');

    const adminRoutes = replaceAll(componentName, 'path: \'/', 'path: \'/nits-admin/');

    const pageNotFound = replaceAll(adminRoutes, 'path: \'/nits-admin/page-not-found', 'path: \'*');

    fs.writeFileSync(path.resolve(__dirname, '../Routes/nits-admin-routes.js'), pageNotFound);

}


function exportPluginsPages() {

    fs.readdir(path.resolve( './plugins'), function (err, files) {

        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Extract the plugins name.
            let pluginAuthor = file;

            fs.readdir(path.resolve('./plugins/'+pluginAuthor), function (err, files) {

                files.forEach(function (file) {

                    let pluginName = file;

                    const pluginRoute = generateRoutes({
                        pages: path.resolve('./plugins/'+pluginAuthor+'/'+pluginName+'/Pages'), // Vue page component directory

                        importPrefix: 'Plugins/'+pluginAuthor+'/'+pluginName+'/Pages/',

                        dynamicImport: true
                    });

                    const pluginComponentName = replaceAll(pluginRoute, 'name: \'', 'name: \'nits-plugin-'+pluginAuthor+'-'+pluginName+'-');

                    const adminRoutes = replaceAll(pluginComponentName, 'path: \'/', 'path: \'/nits-admin/plugin/'+pluginAuthor+'/'+pluginName+'/');

                    fs.writeFileSync(path.resolve(__dirname, '../Routes/nits-plugin-'+pluginAuthor+'-'+pluginName+'.js'), adminRoutes);

                });

            });
        });
    });

}

module.exports = NitsRoutePlugin;