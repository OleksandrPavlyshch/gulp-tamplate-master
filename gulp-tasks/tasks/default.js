const gulp = require('gulp')
	, configs = require('../configs')
	, runSequence = require('run-sequence');

gulp.task('default', () => {
	configs.setEnv('development');
	configs.logEnv();
	runSequence(
		['iconfont', /*'favicons', 'sprite',*/ 'copy', 'scripts', 'images', 'bower']
		, 'sass','templates', 'server', 'watch');
});
