'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, postcss = require('gulp-postcss')
	, sass = require('gulp-sass')
	, sassGlob = require('gulp-sass-glob')
	, autoprefixer = require('autoprefixer')
	, mqpacker = require("css-mqpacker")
	, sourcemaps = require('gulp-sourcemaps')
	, connect = require('gulp-connect')
	, dirs = require('./dirs');

//sass
gulp.task('sass', function () {

	var processors = [
		autoprefixer({browsers: ['last 1 version'], cascade: false}),
		mqpacker({
			sort: function (a, b) {
				a = a.replace(/\D/g,'');
				b = b.replace(/\D/g,'');
				return b-a;
			}
		})
	];

	return gulp.src(dirs.source.sass)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'compact'
		}).on('error', sass.logError))
		.pipe(postcss(processors))
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest(dirs.build.css))
		.pipe(connect.reload());
});