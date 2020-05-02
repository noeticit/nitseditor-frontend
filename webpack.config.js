/**
 * As our first step, we'll pull in the user's webpack.mix.js
 * file. Based on what the user requests in that file,
 * a generic config object will be constructed for us.
 */
let mix = require('laravel-mix');

// let path = require('path');

let ComponentFactory = require('laravel-mix/src/components/ComponentFactory');

new ComponentFactory().installAll();

// class NitsEditorMix {
//
//     seesTailwindConfig(path) {
//         try {
//             require.resolve(path);
//
//             return true;
//         } catch (e) {
//             return false;
//         }
//     }
//
//     /**
//      * The optional name to be used when called by Mix.
//      * Defaults to the class name, lowercased.
//      *
//      * Ex: mix.example();
//      *
//      * @return {String|Array}
//      */
//     name() {
//         // Example:
//         // return 'example';
//         // return ['example', 'alias'];
//         return 'nitsEditor';
//     }
//
//     register(tailwindConfigPath) {
//         this.tailwindConfigPath = tailwindConfigPath;
//
//         if (this.tailwindConfigPath !== undefined) {
//             return;
//         }
//
//         if (this.seesTailwindConfig('./tailwind.config.js')) {
//             this.tailwindConfigPath = './tailwind.config.js';
//
//             return;
//         }
//
//         if (this.seesTailwindConfig('./tailwind.js')) {
//             this.tailwindConfigPath = './tailwind.js';
//         }
//     }
//
//     boot() {
//         const tailwindcss = require('tailwindcss');
//
//         Config.processCssUrls = false;
//         Config.postCss.push(require('autoprefixer'));
//
//         Config.postCss.push(tailwindcss(this.tailwindConfigPath));
//
//     }
//
//     /**
//      * Rules to be merged with the master webpack loaders.
//      *
//      * @return {Array|Object}
//      */
//     webpackRules() {
//         // Example:
//         // return {
//         //     test: /\.less$/,
//         //     loaders: ['...']
//         // };
//     }
//
//     /*
//      * Plugins to be merged with the master webpack config.
//      *
//      * @return {Array|Object}
//      */
//     webpackPlugins() {
//         const NitsRoutePlugins = require('./Webpack/NitsRoutePlugin');
//         const NitsComponentsPlugin = require('./Webpack/NitsComponentsPlugin');
//         const NitsLayoutsPlugin = require('./Webpack/NitsLayoutsPlugin');
//
//         return [
//             new NitsRoutePlugins(), new NitsComponentsPlugin(), new NitsLayoutsPlugin()
//         ];
//     }
//
//     /**
//      * Override the generated webpack configuration.
//      *
//      * @param  {Object} webpackConfig
//      * @return {void}
//      */
//     webpackConfig(webpackConfig) {
//         webpackConfig = {
//             module: {
//                 rules: [
//
//                 ]
//             },
//             node: {
//                 fs: "empty"
//             },
//             output: {
//                 publicPath: '/',
//                 chunkFilename: 'nits-assets/chunks/[name].[chunkhash].js',
//             },
//             resolve: {
//                 symlinks: false,
//                 extensions: ['.js', '.json', '.vue'],
//                 alias: {
//                     NitsModels: path.resolve(__dirname, 'Models'),
//                     ProjectModels: path.resolve('./resources/models'),
//                     ProjectPages: path.resolve('./resources/pages'),
//                     NitsAdminPages: path.resolve(__dirname, 'Pages'),
//                     NitsComponents: path.resolve(__dirname, './Components'),
//                     Plugins: path.resolve('./plugins'),
//                 }
//             },
//         };
//         // webpackConfig.resolve.symlinks= false;
//         // webpackConfig.resolve.extensions.push(['.js', '.json', '.vue']);
//         // webpackConfig.resolve.alias.NitsModels = path.resolve(__dirname, 'Models');
//         // webpackConfig.resolve.alias['ProjectModels'] = path.resolve( './resources/models');
//         // webpackConfig.resolve.alias['ProjectPages'] = path.resolve( './resources/pages');
//         // webpackConfig.resolve.alias['NitsAdminPages'] = path.resolve( __dirname, 'Pages');
//         // webpackConfig.resolve.alias['NitsComponents'] = path.resolve(__dirname, './Components');
//         // webpackConfig.resolve.alias['Plugins'] = path.resolve('./plugins');
//     }
// }
//
// mix.extend('nitsEditor', new NitsEditorMix());

require('./webpack.mix');

/**
 * Just in case the user needs to hook into this point
 * in the build process, we'll make an announcement.
 */

Mix.dispatch('init', Mix);

/**
 * Now that we know which build tasks are required by the
 * user, we can dynamically create a configuration object
 * for Webpack. And that's all there is to it. Simple!
 */

let WebpackConfig = require('laravel-mix/src/builder/WebpackConfig');

module.exports = new WebpackConfig().build();
