'use strict';

var gulp = require('gulp')
	, runSequence = require('run-sequence');

gulp.task('default', function(){
	runSequence(
		['iconfont', 'favicons', 'sprite', 'fonts', 'scripts', 'images']
		, 'sass','templates', 'server', 'watch');
});
