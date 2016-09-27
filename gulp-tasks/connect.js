'use strict';
var gulp = require('gulp')
	, connect = require('gulp-connect')
	, dirs = require('./dirs');

gulp.task('connect', function() {
	connect.server({
		root: dirs.build.build
		, livereload: true
		, port: 3000
	});
});
