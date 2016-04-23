/* jshint esversion: 6, strict: true */

var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	nodemon = require('gulp-nodemon');

gulp.task('test', ()=>{
	'use strict';

	gulp.src('./test')
	.pipe(mocha())
	.on('error', ()=>{
		console.log('error:');
		this.emit('end');
	});
});

gulp.task('start', function () {
  nodemon({
    'script': 'app.js',
    'ext': 'js html',
  	'env': { 'NODE_ENV': 'development' }
  });
});

gulp.task('watch', ()=>{
	'use strict';

	gulp.watch('./*.js', ['test', 'start']);
});