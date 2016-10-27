"use strict";

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, iconfont = require("gulp-iconfont")
	, iconfontCss = require('gulp-iconfont-css')
	, dirs = require('./dirs');


// icon font
var fontname = 'svgfont';

gulp.task('iconfont', function () {
	return gulp.src([dirs.source.svgFontsAssets])
	.pipe(plumber())
	.pipe(iconfontCss({
		fontName: fontname
		, path: 'source/helpers/_svgfont.sass'
		, targetPath: '../../' + dirs.source.sassFolder + '_svgfont.sass'
		, fontPath: '../fonts/'
		, cssClass: 'icon'
	}))
	.pipe(iconfont({
		fontName: fontname
		, prependUnicode: true
		, formats: ['ttf', 'eot', 'woff', 'woff2']
		, normalize: true
		, fontHeight: 1001
		, fontStyle: 'normal'
		, fontWeight: 'normal'
	}))
	.pipe(gulp.dest(dirs.source.fontsFolder));
});
