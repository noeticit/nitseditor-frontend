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
    .js('node_modules/nitseditor-frontend/Assets/js/app.js', 'nits-assets/js')
    .webpackConfig({
        node: {
            fs: "empty"
        },
        output: {
            publicPath: '/',
            chunkFilename: 'nits-assets/chunks/[name].[chunkhash].js',
        },
        resolve: {
            extensions: ['.js', '.json', '.vue'],
            alias: {
                'NitsModels': path.resolve(__dirname, 'node_modules/nitseditor-frontend/Models'),
                'ProjectComponents': path.resolve(__dirname, 'resources')
            }
        }
    })
    .sourceMaps().version().browserSync('nitsapp.local');