var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./build/css'))
});

gulp.task('connect', function() {
	connect.server({
		root: ".",
		livereload: true
	});
});

gulp.task('default', ['connect'], function() {
	gulp.watch(['./scss/*.scss'], ['sass']);
});