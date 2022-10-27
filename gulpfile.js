// loads various gulp modules
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass-embedded'));
const { src, dest, watch, series } = require('gulp')
const concat = require('gulp-concat');
const minifyCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// create task
function buildStyles(){
    return src('main/css/**/*.scss')
      // .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        // .pipe(rename('style.min.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
};

function watchTask(){
  watch(['main/css/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);