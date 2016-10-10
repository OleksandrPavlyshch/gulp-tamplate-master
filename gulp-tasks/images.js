'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, imagemin = require('gulp-imagemin')
	, pngquant = require('imagemin-pngquant')
	, gulpif = require('gulp-if')
	, dirs = require('./dirs');

//images
gulp.task('images', function() {
	return gulp.src(dirs.source.img)
		.pipe(plumber())
		.pipe(gulpif(/[.](png|jpeg|jpg|svg)$/, imagemin({
			progressive: true
			, svgoPlugins: [{
				removeViewBox: false
			}]
			, use: [pngquant()]
		})))
		.pipe(gulp.dest(dirs.build.img));
});