'use strict';
var gulp = require('gulp')
	, browserSync = require('browser-sync').create('server')
	, configs = require('./configs');

// server
gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: configs.buildPath
			, directory: false
		}
		, files: [
			configs.buildPath + '**/*.html',
			configs.build.css + '**/*.css',
			configs.build.images + '**/*'
		]
		, logLevel: 'info' // 'debug', 'info', 'silent', 'warn'
		, logFileChanges: true
		, logConnections: false
		, open: 'local' //local, external, ui, ui-external, tunnel or false
		, ghostMode: {
			clicks: true
			, forms: true
			, scroll: true
		}
		, online: true
		, tunnel: 'public'
	});
});
