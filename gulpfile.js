
var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');


var themePath = './source/theme/';
var distPath = './build/';



/* THEME - LESS */
gulp.task('css', function() {
  'use strict';
  return gulp.src(themePath + 'less/theme.less')
    .pipe(less(
      { paths: [ path.join(__dirname, 'less', 'includes') ] }
    ))
    .pipe(gulp.dest(themePath + 'css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(distPath + 'css'));

});

gulp.task('default', [
  'css'
]);
