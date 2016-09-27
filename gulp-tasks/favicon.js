'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, dirs = require('./dirs');


gulp.task('favicon', function() {
	gulp.src(dirs.source.favicon)
	.pipe(plumber())
	.pipe(gulp.dest(dirs.build.build));
});