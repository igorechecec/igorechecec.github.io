var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssBeautify = require('gulp-cssbeautify'),
    prefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    
    return gulp.src(['./style/sass/**/*.sass', './style/sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cssBeautify())
    .pipe(prefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('sass:watch', function(){
    
    gulp.watch(['./style/sass/**/*.sass', './style/sass/**/*.scss'], ['sass']);
});