const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const {src, dest, watch, series} = require('gulp');
const GulpCleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));


var scssFilesPath = './main/assets/css/components/**/*.scss';
var cssFolder = './css';
function buildStyles(){
    return src(scssFilesPath)
    // .pipe(sass({sassModules: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename('style.min.css'))
    .pipe(GulpCleanCss())
    .pipe(dest(cssFolder))
    
    
        

}

function watchTask(){
    watch(scssFilesPath, buildStyles);
}

exports.default = series(buildStyles, watchTask);