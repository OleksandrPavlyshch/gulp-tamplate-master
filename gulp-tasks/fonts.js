const gulp = require('gulp')
	, filter = require('gulp-filter')
	, configs = require('./configs');

// fonts
gulp.task('fonts', () => {
	gulp.src(configs.source.fonts)
	.pipe(filter(['**/*.ttf', '**/*.eot', '**/*.woff', '**/*.woff2', '**/*.svg']))
	.pipe(gulp.dest(configs.build.fonts));
});