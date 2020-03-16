const mix = require('laravel-mix');

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

const tailwindcss = require('tailwindcss');

mix.copy('node_modules/nitseditor-frontend/Assets/images', 'public/nits-assets/images')
    .sass('node_modules/nitseditor-frontend/Assets/sass/app.scss', 'nits-assets/css')
    .options({
        processCssUrls: false,
        postCss: [ require('autoprefixer'), tailwindcss('./tailwind.config.js') ],
    })
    .js('node_modules/nitseditor-frontend/app.js', 'nits-assets/js')
    .webpackConfig({
        node: {
            fs: "empty"
        },
        output: {
            publicPath: '/',
            chunkFilename: 'nits-assets/chunks/[name].[chunkhash].js',
        },
        resolve: {
            symlinks: false,
            extensions: ['.js', '.json', '.vue'],
            alias: {
                // '@': path.resolve(__dirname)
                NitsModels: path.resolve(__dirname, 'node_modules/nitseditor-frontend/Models'),
                // ProjectComponents: path.resolve(__dirname, 'resources')
            }
        }
    })
    // .extract([
    //     'vue', 'axios', 'lodash', 'vue-router', 'vue-template-compiler', 'vuex'
    // ])
    .sourceMaps().version();
    // .browserSync('nitsapp.local');