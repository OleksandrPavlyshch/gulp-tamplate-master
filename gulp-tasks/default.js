const gulp = require('gulp')
	, runSequence = require('run-sequence');

gulp.task('default', () => {
	runSequence(
		['iconfont', /*'favicons', 'sprite',*/ 'fonts', 'scripts', 'images', 'bower']
		, 'sass','templates', 'server', 'watch');
});
