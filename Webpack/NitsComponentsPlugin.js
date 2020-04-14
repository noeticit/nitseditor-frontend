const fs = require('fs');

let filecontents = 'import Vue from \'vue\';\n\n';

function NitsComponentsPlugin () {}

NitsComponentsPlugin.prototype.apply = function (compiler) {

    exportNitsEditorComponents();

};

function exportNitsEditorComponents() {

    //NitsEditor components...
    generateComponents(path.resolve(__dirname, './../Components'), 'NitsComponents');

    //Plugins components...
    generatePluginsComponents();

    fs.writeFileSync(path.resolve(__dirname, './../Components/components.js'), filecontents);
    
}

function generateComponents(directory, prefix, componentPrefix = '') {

    fs.readdirSync(directory, {withFileTypes: true}).forEach((entry) => {
        let fullPath = path.join(directory, entry.name);
        if(entry.isDirectory()) {
            generateComponents(fullPath, prefix+'/'+entry.name, componentPrefix);
        }
        else if(entry.isFile()){
            if(entry.name.includes('.vue')) {
                let comp = entry.name.replace('.vue', '');

                let componentName = comp.charAt(0).toUpperCase() + comp.slice(1);

                filecontents = filecontents + `Vue.component(\'${componentPrefix + componentName}\', () => import(\'${prefix}/${entry.name}\'));\n`;
            }
        } else {
            // apparently there are some other things that could be here
            // like a symlink, so this is defensive coding
            console.log(`unexpected type: ${fullPath}`);
        }
    });

    return filecontents;
}

function generatePluginsComponents() {

    fs.readdirSync(path.resolve('./plugins'), {withFileTypes: true}).forEach((entry) => {
        let pluginAuthorPath = path.join('./plugins', entry.name);
        let authorName = entry.name;
        if(entry.isDirectory()) {
            fs.readdirSync(pluginAuthorPath, {withFileTypes: true}).forEach((entry) => {
                let pluginpath = path.join(pluginAuthorPath, entry.name+'/components');
                let pluginName = entry.name;
                if(entry.isDirectory()) {

                    let authorPrefix = authorName.charAt(0).toUpperCase() + authorName.toLowerCase().slice(1);
                    let pluginPrefix = pluginName.charAt(0).toUpperCase() + pluginName.toLowerCase().slice(1);

                    generateComponents(pluginpath, 'Plugins/'+authorName+'/'+pluginName+'/components', authorPrefix+pluginPrefix)
                }
            })
        }
    })
}

module.exports = NitsComponentsPlugin;