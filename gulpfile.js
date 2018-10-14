'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');


gulp.task('sass', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./')
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'sass', 'sass:watch']);

gulp.task('sassLint', function () {
    return gulp.src('./src/styles/**/*.s+(a|c)ss')
        .pipe(sassLint(
            {
                configFile: '.sass-lint.yml',
            }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});
