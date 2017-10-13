var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var less = require('gulp-less');

var appFiles = {
    cssFiles:[
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        './site/assets/font/icons.css'
    ],
    lessFiles:[
        './site/styles/*.less'
    ]
};

gulp.task('clean', function(){
    return gulp.src('site/src/*')
    .pipe(clean());
});

gulp.task('css', function(){
    return gulp.src(appFiles.cssFiles)
    .pipe(concat('css-dependences.css'))
    .pipe(gulp.dest('site/src'));
});

gulp.task('less', function(){
    return gulp.src(appFiles.lessFiles)
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('site/src'));
});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('serve', ['less','css'], function(){
  browserSync.init({
    server: {
        baseDir: "./site/"
    }
  });

  gulp.watch('site/index.html', ['reload']);
  gulp.watch(appFiles.cssFiles, ['css', 'reload']);
  gulp.watch(appFiles.lessFiles, ['less', 'reload']);
});

gulp.task('default',['serve']);