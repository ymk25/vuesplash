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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version();

if (process.env.MIX_BROWSER_SYNC) {
    mix.browserSync({
        proxy: {
            target: "http://nginx"
        },
        files: [
            "./resources/**/*.blade.php",
            "./public/**/*"
        ],
        open: false,
        reloadOnRestart: true,
        reloadDebounce: 2000
    });
}

