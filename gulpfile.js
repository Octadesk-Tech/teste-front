var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var concat = require('gulp-concat');

var appFiles = {
    cssFiles:[
        './site/styles/*.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]
};

gulp.task('clean', function(){
    return gulp.src('site/src/*')
    .pipe(clean());
});

gulp.task('css', function(){
    return gulp.src(appFiles.cssFiles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('site/src'));
});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('serve', ['css'], function(){
  browserSync.init({
    server: {
        baseDir: "./site/"
    }
  });

  gulp.watch('site/index.html', ['reload']);
  gulp.watch(appFiles.cssFiles, ['css', 'reload']);
});

gulp.task('default',['serve']);