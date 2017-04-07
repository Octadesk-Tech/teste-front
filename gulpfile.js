var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	csso = require('gulp-csso'),
	minifyHTML = require('gulp-htmlmin');
    imagemin = require('gulp-imagemin');

gulp.task('default', ['minjs', 'mincss', 'minhtml', 'imagemin']);

gulp.task('minjs', function() {
	return gulp.src(['src/js/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('out/js/'));
});

gulp.task('mincss', function() {
	return gulp.src(['src/assets/css/*.css'])
		.pipe(csso())
		.pipe(gulp.dest('out/assets/css/'));
});

gulp.task('imagemin', function() {
	return gulp.src(['src/assets/img/*.png'])
		.pipe(imagemin())
		.pipe(gulp.dest('out/assets/img/'));
});

gulp.task('minhtml', function() {
	return gulp.src(['src/index.html'])
		.pipe(minifyHTML({
			removeComments: true,
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true
		}))
		.pipe(gulp.dest('out/'));
});

gulp.task('watch', function() {
	gulp.watch(['src/index.html', "src/js/app.js", "src/assets/css/*.css"]).on('change', livereload.changed);
	gulp.watch(['src/assets/css/*.css'], ['mincss']);
	gulp.watch(['src/js/*.js'], ['minjs']);
	gulp.watch(['src/*.html'], ['minhtml']);
});