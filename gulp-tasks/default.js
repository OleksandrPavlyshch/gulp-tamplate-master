'use strict';

var gulp = require('gulp')
	, runSequence = require('run-sequence');

gulp.task('default', function(){
	runSequence('iconfont', 'favicons', 'fonts', 'scripts', 'sprite', 'images', 'sass','templates', 'server', 'watch');
});
