var path = require('path');
var gulp = require('gulp');
var del = require('del');
var clean = require('gulp-clean');
var minifycss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var historyFallback = require('connect-history-api-fallback');

var config = {
    app: './src',
    build: './dist',
};

config
    .src = {
        html: [config.app + '/**/*.html'],
        js: [config.app + '/assets/js/**/*.js'],
        sass: [config.app + '/assets/scss/**/*.scss'],
        img: [config.app + '/assets/img/**/*'],
        fonts: [config.app + '/assets/fonts/*']
    };

config
    .dest = {
        html: config.build + '',
        js: config.build + '/assets/js',
        css: config.build + '/assets/css',
        img: config.build + '/assets/img',
        fonts: config.build + '/assets/fonts'
    };

gulp.task('fonts', function() {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('img', function() {
    return gulp.src(config.src.img)
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('js', function() {
    return gulp.src(config.src.js)
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(uglify({
        	mangle: false
        }))
        .pipe(gulp.dest(config.dest.js));
});

gulp.task('html', function() {
    return gulp.src(config.src.html)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(config.dest.html));
});

gulp.task('watch', function(){
    function checkDelete(file){
        if (file.event === 'unlink' || file.event === 'unlinkDir'){
            var srcPath = path.relative(path.resolve('.'), file.path);
            var destPath = path.resolve(config.build + '', srcPath);
            del.sync(destPath);
        }
    };

    var fontWatch = watch(config.src.fonts, {events:['add', 'change', 'unlink', 'unlinkDir']}, function(file){
        checkDelete(file);
        gulp.start('fonts-watch');
    });

    var imgWatch = watch(config.src.img, {events:['add', 'change', 'unlink', 'unlinkDir']}, function(file){
        checkDelete(file);
        gulp.start('images-watch');
    });

    var jsWatch = watch(config.src.js, {events:['add', 'change', 'unlink', 'unlinkDir']}, function(file){
        checkDelete(file);
        gulp.start('js-watch');
    });

    var sassWatch = watch(config.src.sass, {events:['add', 'change', 'unlink', 'unlinkDir']}, function(file){
        if (file.event === 'unlink'){
            del.sync(config.dest.css + '/*');
        }
        gulp.start('sass');
    });

    var htmlWatch = watch(config.src.html, {events:['add', 'change', 'unlink', 'unlinkDir']}, function(file){
        checkDelete(file);
        gulp.start('html-watch');
    });
});

gulp.task('sass', function(){
    return gulp.src(config.src.sass)
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(compass({
            css: config.dest.css,
            sass: config.app + '/assets/scss/',
            require: ['compass/import-once/activate']
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.dest.css))
        .pipe(browserSync.stream());
});

gulp.task('delete', function(){
    del.sync([
        config.build + '/*'
    ]);
});

gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('images-watch', ['img'], browserSync.reload);
gulp.task('fonts-watch', ['fonts'], browserSync.reload);
gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('files', ['fonts', 'img', 'js', 'sass', 'html']);

gulp.task('server', ['delete', 'files', 'watch'], function() {
    browserSync.init({
        server: {
      		baseDir: config.build,
      		middleware: [
        		historyFallback()
      		]
    	}
    });
});

gulp.task('default', ['server']);
