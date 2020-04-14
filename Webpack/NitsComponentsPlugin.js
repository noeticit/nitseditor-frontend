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
    generateComponents(path.resolve('./plugins'), 'Plugins');

    fs.writeFileSync(path.resolve(__dirname, './Components/components.js'), filecontents);
    
}

function generateComponents(directory, prefix) {

    fs.readdirSync(directory, {withFileTypes: true}).forEach((entry) => {
        let fullPath = path.join(directory, entry.name);
        if(entry.isDirectory()) {
            generateComponents(fullPath, prefix+'/'+entry.name);
        }
        else if(entry.isFile()){
            if(entry.name.includes('.vue')) {
                let componentName = entry.name.replace('.vue', '');

                filecontents = filecontents + `Vue.component(\'${componentName}\', () => import(\'${prefix}/${entry.name}\'));\n`;
            }
        } else {
            // apparently there are some other things that could be here
            // like a symlink, so this is defensive coding
            console.log(`unexpected type: ${fullPath}`);
        }
    });

    return filecontents;
}

module.exports = NitsComponentsPlugin;