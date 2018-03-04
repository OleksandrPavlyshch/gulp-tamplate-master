const gulp = require('gulp')
	, pug = require('gulp-pug')
	, plumber = require('gulp-plumber')
	, fs = require('fs')
	, configs = require('../configs');


gulp.task('templates', () => {
	let pugJson = JSON.parse( fs.readFileSync(configs.source.pugJson, { encoding: 'utf8' }));

	return gulp.src(configs.source.pug)
	.pipe(plumber())
	.pipe(pug({
		pretty: !configs.production
		, locals: pugJson
	}))
	.pipe(gulp.dest(configs.build.root));
});

gulp.task('templates:watch', () => {
	gulp.watch(configs.source.pug_watch, ['templates']);
});