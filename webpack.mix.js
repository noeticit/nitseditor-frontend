const mix = require('laravel-mix');
require('laravel-mix-alias');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    postCss: [
        require('autoprefixer'),
    ],
});

mix.alias({
    'NitsModels': 'node_modules/nitseditor-frontend/Models',
});

mix.webpackConfig({
    node: {
        fs: "empty"
    },
    output: {
        publicPath: '/',
        chunkFilename: 'nits-assets/chunks/[name].[chunkhash].js',
    }
});

mix.copy('node_modules/nitseditor-frontend/Assets', 'public/nits-assets/images');

const tailwindcss = require('tailwindcss');

mix.sass('node_modules/nitseditor-frontend/Assets/sass/app.scss', 'nits-assets/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .js('node_modules/nitseditor-frontend/Assets/js/app.js', 'nits-assets/js')
    .sourceMaps().version();
