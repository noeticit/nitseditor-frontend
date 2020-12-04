const mix = require('laravel-mix')
const path = require('path')

// const tailwindcss = require('tailwindcss');

const NitsComponentsPlugin = require('./Webpack/NitsComponentsPlugin');
// const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
// const CKEStyles = require('@ckeditor/ckeditor5-dev-utils').styles;
// const CKERegex = {
//     svg: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
//     css: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
// };

// Mix.listen('configReady', webpackConfig => {
//     const rules = webpackConfig.module.rules;
//     const targetSVG = /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/;
//     const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/;
//     const targetCSS = /\.css$/;
//
//     // exclude CKE regex from mix's default rules
//     // if there's a better way to loop/change this, open to suggestions
//     for (let rule of rules) {
//         if (rule.test.toString() === targetSVG.toString()) {
//             rule.exclude = CKERegex.svg;
//         }
//         else if (rule.test.toString() === targetFont.toString()) {
//             rule.exclude = CKERegex.svg;
//         }
//         else if (rule.test.toString() === targetCSS.toString()) {
//             rule.exclude = CKERegex.css;
//         }
//     }
// });


mix.sass('./resources/sass/app.scss', 'public/nits-assets/css')
    .js('resources/js/app.js', 'public/nits-assets/js')
    .postCss("resources/css/app.css", "public/css", [
        require("tailwindcss"),
    ])
    .webpackConfig({
        output: {
            chunkFilename: 'nits-assets/chunks/[name].[contenthash].js'
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
        plugins: [
            new NitsComponentsPlugin(),
        ]
    }).babelConfig({ plugins: ['@babel/plugin-syntax-dynamic-import']}).sourceMaps().version();