var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	jshint = require('gulp-jshint');

gulp.task('test', function () {
	gulp.
		src('./test').
		pipe(jshint()).
		pipe(mocha()).
		on('error', function () {
			console.log('error:');
			this.emit('end');
	});
});

gulp.task('start', function () {
	gulp.
		src('./app').
		pipe(jshint()).
		on('error', function () {
			console.log('error:');
			this.emit('end');
	});
});

gulp.task('watch', function () {
	gulp.watch('./*.js', ['test', 'start']);
});