const fs = require('fs');

function NitsComponentsPlugin () {}

NitsComponentsPlugin.prototype.apply = function (compiler) {

    exportNitsEditorComponents();

};

function exportNitsEditorComponents() {

    let filecontents = 'import Vue from \'vue\';\n\n';

    fs.readdir(path.resolve(__dirname, './../Components'), function (err, files) {

        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        //listing all files using forEach
        files.forEach(function (file) {
            
            // Extract the plugins name.
            let folderName = file;

            fs.readdir(path.resolve(__dirname, './../Components/'+folderName), function (err, files) {

                // console.log(files);
                files.forEach(function (file) {

                    let filename = file.replace('.vue', '');

                    filecontents =  filecontents + `Vue.component(\'${filename}\', () => import(\'NitsComponents/${folderName}/${file}.vue\'));\n`;

                    fs.writeFileSync(path.resolve(__dirname, './nits-components.js'), filecontents);
                });
            });
        });

    });
    
}

module.exports = NitsComponentsPlugin;