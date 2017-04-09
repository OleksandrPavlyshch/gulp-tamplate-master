"use strict";
var gulp = require('gulp')
	, mainBowerFiles = require('main-bower-files')
	, plumber = require('gulp-plumber')
	, uglify = require('gulp-uglify')
	, bower = require('gulp-bower')
	, runSequence = require('run-sequence')
	, cleanCSS = require('gulp-clean-css')
	, wiredep = require('wiredep').stream
	, configs = require('./configs');

gulp.task('bower', function() {
	runSequence('install-bower-packeges', 'vendor-js', 'vendor-css', 'wiredep');
});

// install bower packeges
gulp.task('install-bower-packeges', function() {
	return bower();

});

//add gulp dependency ot html
gulp.task('wiredep', function () {
  gulp.src(configs.source.buildPath + '*.html')
    .pipe(wiredep({
      // optional: 'configuration',
      // goes: 'here'
    }))
    .pipe(gulp.dest('./dest'));
});

// vendor-js
gulp.task('vendor-js', function() {
	return gulp.src(mainBowerFiles('**/*.js'))
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(configs.build.vendorJs));
});

// vendor-js
gulp.task('vendor-css', function() {
	return gulp.src(mainBowerFiles('**/*.css'))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest(configs.build.vendorCss));
});