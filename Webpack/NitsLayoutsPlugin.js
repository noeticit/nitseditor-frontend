const fs = require('fs');

let filecontents = 'import Vue from \'vue\';\n\n';

function NitsLayoutsPlugin () {}

NitsLayoutsPlugin.prototype.apply = function (compiler) {

    exportNitsEditorLayouts();

};

function exportNitsEditorLayouts() {

    //NitsEditor components...
    console.log('\nDrafting all layout files to be imported\n');
    generateLayouts(path.resolve(__dirname, './../Layouts'), 'NitsLayout');

    fs.writeFileSync(path.resolve(__dirname, './../Models/_layouts.js'), filecontents);
    
}

function generateLayouts(directory, prefix, componentPrefix = '') {

    fs.readdirSync(directory, {withFileTypes: true}).forEach((entry) => {
        let fullPath = path.join(directory, entry.name);
        if(entry.isDirectory()) {
            generateLayouts(fullPath, prefix+'/'+entry.name, componentPrefix);
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

module.exports = NitsLayoutsPlugin;