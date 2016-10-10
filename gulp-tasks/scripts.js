'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, sourcemaps = require('gulp-sourcemaps')
	, plumber = require('gulp-plumber')
	, connect = require('gulp-connect')
	, uglify = require('gulp-uglify')
	, concat = require('gulp-concat')
	, dirs = require('./dirs');

//scripts
gulp.task('scripts', function() {
	return gulp.src(dirs.source.js)
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(concat("index.js"))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(dirs.build.js))
	.pipe(connect.reload());
});