const gulp = require('gulp');

gulp.task('watch',
	[
		'templates:watch'
		, 'sass:watch'
		, 'scripts:watch'
		, 'images:watch'
		// , 'svg-font:watch'
		// , 'icon-sprite:watch'
		, 'sprite:svg:watch'
		, 'list-pages:watch'
	]
);