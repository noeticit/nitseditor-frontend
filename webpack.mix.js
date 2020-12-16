const mix = require('laravel-mix')
const NitsComponentsPlugin = require('./Webpack/NitsComponentsPlugin');

mix.js('resources/js/app.js', 'public/nits-assets/js')
    .postCss('resources/sass/app.css', 'public/nits-assets/css', [
        require("tailwindcss"),
    ])
    .webpackConfig({
        output: {
            chunkFilename: 'nits-assets/chunks/[name].[contenthash].js',
        },
        resolve: {
            symlinks: false,
            alias: {
                NitsModels: path.resolve(__dirname, 'Models'),
                NitsComponents: path.resolve(__dirname, './Components'),
                NitsPages: path.resolve( './resources/pages'),
                ProjectModels: path.resolve('./resources/models'),
            },
        },
        plugins:[
            new NitsComponentsPlugin(),
        ]
    }).sourceMaps().version();