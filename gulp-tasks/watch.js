'use strict';

var gulp = require('gulp')
	, dirs = require('./dirs');

gulp.task('watch', function(){
	gulp.watch(dirs.source.jade_watch, ['templates']);
	gulp.watch(dirs.source.sass, ['sass']);
	gulp.watch(dirs.source.js, ['scripts']);
	gulp.watch(dirs.source.img, ['images']);
	gulp.watch(dirs.source.icons, ['sprite']);
	gulp.watch(dirs.source.helpers + '*.*', ['iconfont']);
});
