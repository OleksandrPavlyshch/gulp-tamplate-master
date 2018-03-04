const gulp = require('gulp')
	, configs = require('../configs')
	, runSequence = require('run-sequence');

gulp.task('default', () => {
	configs.setEnv('development');
	configs.logEnv();
	runSequence(
		['svg-font', /*'favicons', 'icon-sprite'*/, 'copy', 'scripts', 'images', 'bower']
		, 'sass','templates', 'server', 'watch');
});
