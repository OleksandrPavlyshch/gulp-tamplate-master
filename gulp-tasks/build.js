const gulp = require('gulp')
	, configs = require('./configs')
	, runSequence = require('run-sequence');

gulp.task('setProdEnv', () => {
	configs.environment = "prod";
		}
	);

gulp.task('build', () => {
	runSequence(['iconfont', 'favicons', 'fonts', 'scripts', 'sprite', 'images'], 'sass','templates');
});
