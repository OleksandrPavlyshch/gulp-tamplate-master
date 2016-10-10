'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, spritesmith = require('gulp.spritesmith')
	, dirs = require('./dirs');

// sprite
gulp.task('sprite', function() {
	var spriteData = gulp.src(dirs.source.icons)
	.pipe(plumber())
	.pipe(spritesmith({
		imgName: 'icons.png'
		, cssName: '_sprite.sass'
		, imgPath: '../img/icons.png'
		, cssFormat: 'sass'
		, padding: 4
		, cssTemplate: dirs.source.cssTemplate
	}));
	spriteData.img
		.pipe(gulp.dest(dirs.build.img));
	spriteData.css
		.pipe(gulp.dest(dirs.source.sassFolder));
});