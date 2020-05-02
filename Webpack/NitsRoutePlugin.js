const fs = require('fs');

let filecontents = 'import Vue from \'vue\';\nimport VueRouter from \'vue-router\';\n\nVue.use(VueRouter);\n\nexport const router = new VueRouter({\n' +
    '    mode: \'history\',\n    routes: [';

let dynamicRouteContent = '';

function NitsRoutePlugin() {}

NitsRoutePlugin.prototype.apply = function (compiler) {

    console.log('\n Generating Project Pages routes\n');

    generateRoutes(path.resolve('./resources/pages'), 'ProjectPages');

    console.log('\n Generating Admin Pages routes\n');

    generateRoutes(path.resolve(__dirname, './../Pages'), 'NitsAdminPages', '/nits-admin', 'nits-admin');

    console.log('\n Generating Plugins Pages routes\n');

    generatePluginsRoutes();

    filecontents = filecontents + dynamicRouteContent;

    filecontents = filecontents + `\n\t{\n\t\tname: \'page-not-found\',\n\t\tpath: \'*\',\n\t\tcomponent: Vue.component(\'page-not-found\', () => import(\'NitsAdminPages/page-not-found.vue\')),\n\t},`;

    filecontents = filecontents + '\n    ],\n    base: \'/\',\n' +
        '});';

    fs.writeFileSync(path.resolve(__dirname, './../routes.js'), filecontents);
};

function generateRoutes(directory, componentPathPrefix, pathPrefix = '', namePrefix = '') {

    fs.readdirSync(directory, {withFileTypes: true}).forEach((entry) => {
        let fullPath = path.join(directory, entry.name);
        if(entry.isDirectory()) {
            generateRoutes(
                fullPath,
                componentPathPrefix+'/'+entry.name,
                pathPrefix+'/'+entry.name,
                namePrefix ? namePrefix+'-'+entry.name : entry.name
            );
        }
        else if(entry.isFile()){
            if(entry.name.includes('.vue')) {
                if(entry.name === 'page-not-found.vue') {
                    return '';
                }
                else {
                    let comp = entry.name.replace('.vue', '');
                    //For path and component name import
                    let path;
                    let name;
                    if(comp.toLowerCase() === 'index') {
                        path = pathPrefix+'/';
                        name = namePrefix ? namePrefix.toLowerCase()+'-'+'index' : 'index';
                    }
                    else {
                        if(comp.slice(0, 2) === '__'){
                            path = pathPrefix+'/:'+comp.replace('__', '').toLowerCase();
                            name = namePrefix ? namePrefix.toLowerCase()+'-'+comp.replace('__', '').toLowerCase() : comp.replace('__', '').toLowerCase();
                        }
                        else {
                            path = pathPrefix+'/'+comp.toLowerCase();
                            name = namePrefix ? namePrefix.toLowerCase()+'-'+comp.toLowerCase() : comp.toLowerCase();
                        }
                    }

                    //For metadata tags..
                    let fileData = fs.readFileSync(directory+'/'+entry.name, 'utf8').toString();

                    let getMetaData = extractMetaData(fileData, '<route-meta>', '</route-meta>');

                    if(getMetaData) {
                        let data = trimNewLine(getMetaData, '\n');
                        let metadata = data.split('\n').map((line, index) => {
                            if((index === 0))
                                return line;
                            else
                                return `\t    ${line}`;
                        }).join('\n');

                        if(comp.slice(0, 2) === '__')
                            dynamicRouteContent = dynamicRouteContent + `\n\t{\n\t\tname: \'${name}\',\n\t\tpath: \'${path}\',\n\t\tcomponent: Vue.component(\'${name}\', () => import(/* webpackChunkName: "${componentPathPrefix}-component" */ \'${componentPathPrefix}/${entry.name}\')),\n\t\tmeta:${metadata}\n\t},`;
                        else
                            filecontents = filecontents + `\n\t{\n\t\tname: \'${name}\',\n\t\tpath: \'${path}\',\n\t\tcomponent: Vue.component(\'${name}\', () => import(/* webpackChunkName: "${componentPathPrefix}-component" */ \'${componentPathPrefix}/${entry.name}\')),\n\t\tmeta:${metadata}\n\t},`;
                    }
                    else {
                        if(comp.slice(0, 2) === '__')
                            dynamicRouteContent = dynamicRouteContent + `\n\t{\n\t\tname: \'${name}\',\n\t\tpath: \'${path}\',\n\t\tcomponent: Vue.component(\'${name}\', () => import(/* webpackChunkName: "${componentPathPrefix}-component" */ \'${componentPathPrefix}/${entry.name}\')),\n\t},`;
                        else
                            filecontents = filecontents + `\n\t{\n\t\tname: \'${name}\',\n\t\tpath: \'${path}\',\n\t\tcomponent: Vue.component(\'${name}\', () => import(/* webpackChunkName: "${componentPathPrefix}-component" */ \'${componentPathPrefix}/${entry.name}\')),\n\t},`;
                    }

                }
            }
        } else {
            // apparently there are some other things that could be here
            // like a symlink, so this is defensive coding
            console.log(`unexpected type: ${fullPath}`);
        }
    });

    return filecontents;
}

function generatePluginsRoutes() {
    fs.readdirSync(path.resolve('./plugins'), {withFileTypes: true}).forEach((entry) => {
        let pluginAuthorPath = path.join('./plugins', entry.name);
        let authorName = entry.name;
        if(entry.isDirectory()) {
            fs.readdirSync(pluginAuthorPath, {withFileTypes: true}).forEach((entry) => {
                let pluginpath = path.join(pluginAuthorPath, entry.name+'/pages');
                let pluginName = entry.name;
                if(entry.isDirectory()) {

                    let componentPathPrefix = 'Plugins/'+authorName.toLowerCase()+'/'+pluginName.toLowerCase()+'/pages';
                    let pathPrefix = '/nits-plugin'+'/'+authorName.toLowerCase()+'/'+pluginName.toLowerCase();
                    let namePrefix = 'plugin-'+authorName.toLowerCase()+'-'+pluginName.toLowerCase();
                    let path_ch = path.resolve(pluginpath);
                    generateRoutes(path_ch, componentPathPrefix, pathPrefix, namePrefix);
                }
            })
        }
    })
}

function extractMetaData(string, prefix, suffix) {

    var i = string.indexOf(prefix);
    if (i >= 0) {
        string = string.substring(i + prefix.length);
    }
    else {
        return '';
    }
    if (suffix) {
        i = string.indexOf(suffix);
        if (i >= 0) {
            string = string.substring(0, i);
        }
        else {
            return '';
        }
    }
    return string;
}

function trimNewLine(string, needle){
    var first_pos = 0;
    var last_pos = string.length-1;

    //find first non needle char position
    for(var i = 0; i<string.length;i++){
        if(string.charAt(i) !== needle){
            first_pos = (i == 0? 0:i);
            break;
        }
    }
    //find last non needle char position
    for(var i = string.length-1; i>0;i--){
        if(string.charAt(i) !== needle){
            last_pos = (i == string.length? string.length:i+1);
            break;
        }
    }
    return string.substring(first_pos,last_pos);
}

module.exports = NitsRoutePlugin;