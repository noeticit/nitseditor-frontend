const fs = require('fs');

let filecontents = 'export const components_config = [\n';

let dynamicElementContent = '';

function NitsElementConfig() {}

NitsElementConfig.prototype.apply = function (compiler) {


    //NitsEditor elements...
    console.log('\nDrafting all components to be imported\n');
    generateElements(path.resolve(__dirname, './../Components/Base/Forms'), 'NitsElements');

    filecontents = filecontents + '\n' + '];'

    fs.writeFileSync(path.resolve(__dirname, './../Models/_elements.js'), filecontents);

};

function generateElements(directory, prefix, componentPrefix = '', namePrefix = '') {

    fs.readdirSync(directory, {withFileTypes: true}).forEach((entry) => {
        let fullPath = path.join(directory, entry.name);
         if(entry.isFile()){
            if(entry.name.includes('.vue')) {
                let comp = entry.name.replace('.vue', '');

                let componentName = comp.charAt(0).toUpperCase() + comp.slice(1);

                let name;
                name = namePrefix ? namePrefix.toLowerCase()+'-'+comp.toLowerCase() : comp.toLowerCase();

                filecontents = filecontents + `\t{\n\t\t name: \'${comp}\',\n\t\t component_name: \'${name}\'\n\t},`;

            }
        } else {
            // apparently there are some other things that could be here
            // like a symlink, so this is defensive coding
            console.log(`unexpected type: ${fullPath}`);
        }
    });

    return filecontents;

}


module.exports = NitsElementConfig;