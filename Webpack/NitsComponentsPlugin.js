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

            console.log(file);
            
            fs.readdir(path.resolve(__dirname, './../Components/'+folderName), function (err, files) {

                // console.log(files);
                files.forEach(function (file) {

                    //Need to check the file is directory or file.
                    fs.statSync('./../Components/'+folderName, function(err, stats) {
                        if (stats.isFile()) {
                            console.log('    file');
                        }
                        if (stats.isDirectory()) {
                            console.log('    directory');
                        }
                    });
                    // let stats = fs.statSync('./../Components/'+file);
                    // console.log('is file ? ' + stats.isFile());

                    // var stats = fs.statSync("c:\\demo");
                    // console.log('is directory ? ' + stats.isDirectory());
                    //Need to check the file is having .vue as extension.
                    
                    let filename = file.replace('.vue', '');

                    filecontents =  filecontents + `Vue.component(\'${filename}\', () => import(\'NitsComponents/${folderName}/${file}.vue\'));\n`;

                    console.log(filecontents);

                    fs.writeFileSync(path.resolve(__dirname, './nits-components.js'), filecontents);
                });
            });
        });

    });
    
}

function exportNitsEditorPluginsComponents () {
    //We need to fomrat a architecture. ie. we have to concatenate the component name
    //Author name and plugin name Vue.component('author-plugin-component-name)
}

module.exports = NitsComponentsPlugin;