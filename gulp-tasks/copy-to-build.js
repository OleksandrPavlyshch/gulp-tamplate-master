'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, mainBowerFiles = require('main-bower-files')
	, uglify = require('gulp-uglify')
	, filter = require('gulp-filter')
	, dirs = require('./dirs');

// favicon
gulp.task('favicon', function() {
	gulp.src(dirs.source.favicon)
	.pipe(plumber())
	.pipe(gulp.dest(dirs.build.build));
});

// vendor-js
gulp.task('vendor-js', function() {
	return gulp.src(mainBowerFiles('**/*.js'))
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(dirs.build.vendorJs));
});

// vendor-js
gulp.task('vendor-css', function() {
	return gulp.src(mainBowerFiles('**/*.css'))
	.pipe(plumber())
	.pipe(gulp.dest(dirs.build.vendorCss));
});

// fonts
gulp.task('fonts', function() {
	gulp.src(dirs.source.fonts)
	.pipe(filter(['**/*.ttf', '**/*.eot', '**/*.woff', '**/*.woff2']))
	.pipe(gulp.dest(dirs.build.fonts));
});