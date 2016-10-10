"use strict";

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, jade = require('gulp-jade')
	, connect = require('gulp-connect')
	, fs = require('fs')
	, dirs = require('./dirs');

//jade
gulp.task('templates', function() {
	var jadeJson = JSON.parse( fs.readFileSync(dirs.source.jadeJson, { encoding: 'utf8' }));

	gulp.src(dirs.source.jade)
	.pipe(plumber())
	.pipe(jade({
		pretty: true
		, locals: jadeJson
	}))
	.pipe(gulp.dest(dirs.build.build))
	.pipe(connect.reload());
});
