let util = require('gulp-util')
	, production = util.env.production || util.env.prod || false
	, soursePath = './source/'
	, buildPath = './build/'
	, configs = {
		env: 'development'
		, production: production
		, 'source': {
				'root': soursePath
				, 'vendorJs': soursePath + 'js/vendor/'
				, 'vendorCss': soursePath + 'css/vendor/'
				, 'js': soursePath + 'elements/**/*.js'
				, 'fonts': soursePath + 'fonts/**/*'
				, 'fontsFolder': soursePath + 'fonts/'
				, 'pug': soursePath + 'pages/*.pug'
				, 'pugLayout': soursePath + 'pages/layout/'
				, 'pugJson': soursePath + 'pages/jsons/index.json'
				, 'pug_watch': [soursePath + 'pages/**/*.pug', soursePath + 'pages/**/*.json', soursePath + 'elements/**/*.pug', soursePath + 'elements/**/*.json']
				, 'sass': [soursePath + 'sass/**/*.+(sass|scss)', soursePath + 'elements/**/*.(sass|scss)']
				, 'sassFolder': soursePath + 'sass/'
				, 'img': soursePath + 'img/*.*'
				, 'icons': soursePath + 'img/icons/*.png'
				, 'cssTemplate': soursePath + 'helpers/sprite.template.mustache'
				, 'helpers': soursePath + 'helpers/'
				, 'svgFontsAssets': soursePath + 'svg-font-assets/*.svg'
				, 'favicon': soursePath + 'favicon/**/*.png'
		}
		, 'build': {
				'root': buildPath
				, 'vendorJs': buildPath + '/js/vendor/'
				, 'vendorCss': buildPath + '/css/vendor/'
				, 'css': buildPath + '/css/'
				, 'js': buildPath + '/js/'
				, 'fonts': buildPath + '/fonts/'
				, 'build': buildPath
				, 'img': buildPath + '/img/'
				, 'favicon': buildPath + '/favicon'
		}
		, setEnv: (env) => {
				if (typeof env !== 'string') return;
				this.env = env;
				configs.production = env === 'production';
				process.env.NODE_ENV = env;
		}
		, logEnv: () => {
				util.log(
						'Environment:',
						util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
				);
		}
		, errorHandler: require('./util/handle-errors')
};

configs.setEnv(production ? 'production' : 'development');

module.exports = configs;