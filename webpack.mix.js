const mix = require('laravel-mix');
let path = require('path');
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

const NitsRoutePlugins = require('./Webpack/NitsRoutePlugin');
const NitsComponentsPlugin = require('./Webpack/NitsComponentsPlugin');
const NitsLayoutsPlugin = require('./Webpack/NitsLayoutsPlugin');

/*
 |--------------------------------------------------------------------------
 | CKEditor configuration
 |--------------------------------------------------------------------------
 |
 | Neccessary Webpack config files.
 |
 */
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const CKEStyles = require('@ckeditor/ckeditor5-dev-utils').styles;
const CKERegex = {
    svg: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
    css: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
};

Mix.listen('configReady', webpackConfig => {
    const rules = webpackConfig.module.rules;
    const targetSVG = /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/;
    const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/;
    const targetCSS = /\.css$/;

    // exclude CKE regex from mix's default rules
    // if there's a better way to loop/change this, open to suggestions
    for (let rule of rules) {
        if (rule.test.toString() === targetSVG.toString()) {
            rule.exclude = CKERegex.svg;
        }
        else if (rule.test.toString() === targetFont.toString()) {
            rule.exclude = CKERegex.svg;
        }
        else if (rule.test.toString() === targetCSS.toString()) {
            rule.exclude = CKERegex.css;
        }
    }
});


mix.copy('node_modules/nitseditor-frontend/Assets/images', 'public/nits-assets/images')
    .sass('node_modules/nitseditor-frontend/Assets/sass/app.scss', 'public/nits-assets/css')
    .options({
        processCssUrls: false,
        postCss: [ require('autoprefixer'), tailwindcss('./tailwind.config.js') ],
    })
    .js(path.resolve('./resources/js/app.js'), 'public/nits-assets/js')
    .webpackConfig({
        module: {
            rules: [
                {
                    test: CKERegex.svg,
                    use: [ 'raw-loader' ]
                },
                {
                    test: CKERegex.css,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                singleton: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: CKEStyles.getPostCssConfig({
                                themeImporter: {
                                    themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                                },
                                minify: true
                            })
                        },
                    ]
                }
            ]
        },
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
                NitsModels: path.resolve(__dirname, 'Models'),
                ProjectModels: path.resolve('./resources/models'),
                ProjectPages: path.resolve('./resources/pages'),
                NitsAdminPages: path.resolve(__dirname, 'Pages'),
                NitsComponents: path.resolve(__dirname, './Components'),
                Plugins: path.resolve('./plugins'),
            }
        },
        plugins: [
            new NitsRoutePlugins(),
            new NitsComponentsPlugin(),
            new NitsLayoutsPlugin(),
            new CKEditorWebpackPlugin({language: 'en', additionalLanguages: 'all'})
        ]
    })
    // .extract([
    //     'vue', 'axios', 'lodash', 'vue-router', 'vue-template-compiler', 'vuex'
    // ])
    // .nitsEditor()
    .sourceMaps().version();