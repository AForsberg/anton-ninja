var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./build/css'))
});

gulp.task('webserver', function() {
	return gulp.src('.')
		.pipe(webserver({
			livereload: true,
			directoryListing: false,
			open: false,
            host: "0.0.0.0"
		}));
});

gulp.task('default', ['webserver'], function() {
	gulp.watch(['./scss/*.scss'], ['sass']);
});