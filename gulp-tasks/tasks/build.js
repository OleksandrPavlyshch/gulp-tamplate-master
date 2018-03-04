const gulp = require('gulp')
	, configs = require('../configs')
	, runSequence = require('run-sequence');

gulp.task('setProdEnv', () => {
	configs.environment = "prod";
		}
	);

gulp.task('build', () => {
	configs.setEnv('production');
	configs.logEnv();
	runSequence(['iconfont', 'favicons', 'copy', 'scripts', 'sprite', 'images'], 'sass','templates');
});
