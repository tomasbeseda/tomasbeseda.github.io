'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Bundle js
gulp.task('js-bundle', function() {
    return gulp.src('scripts/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('build/js/'));
});

// Compress the js bundle
gulp.task('compress', function() {
    return gulp.src('build/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// Build css
gulp.task('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

// Minify css
gulp.task('minify-css', function() {
    return gulp.src('build/css/main.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('build/css'));
});

// Default task
gulp.task('default', function() {
    gulp.start('js-bundle');
    gulp.start('sass');
    setTimeout(function() {
        gulp.start('minify-css');
        gulp.start('compress');
    }, 500);
});
