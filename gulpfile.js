var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var stylus = require('gulp-stylus');
var stylusPath = './stylus/*.styl';

gulp.task('stylus',function(){
    return gulp.src(stylusPath)
           .pipe(stylus())
           .pipe(gulp.dest('dist/css'))
           .pipe(browserSync.stream())
})


gulp.task('watch',function(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    var temlateFiles = [
        '*.html'
    ];
    gulp.watch(temlateFiles).on('change',reload);

    gulp.watch(stylusPath,['stylus']);
})

