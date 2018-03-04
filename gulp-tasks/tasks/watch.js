const gulp = require('gulp');

gulp.task('watch',
	[
		'templates:watch'
		, 'sass:watch'
		, 'scripts:watch'
		, 'images:watch'
		// , 'icon-sprite:watch'
		, 'svg-font:watch'
		, 'list-pages:watch'
	]
);