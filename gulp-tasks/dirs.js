'use strict';

var soursePath = './source/'
	, buildPath = './build/'
	, dirs = {
		'source': {
			'vendorJs': soursePath + 'js/vendor/'
			, 'vendorCss': soursePath + 'css/vendor/'
			, 'favicon': soursePath + 'favicon/*.ico'
			, 'js': soursePath + 'elements/**/*.js'
			, 'fonts': soursePath + 'fonts/**/*'
			, 'fontsFolder': soursePath + 'fonts/'
			, 'jade': soursePath + 'pages/*.jade'
			, 'jadeJson': soursePath + 'pages/jsons/index.json'
			, 'jade_watch': [soursePath + 'pages/**/*.jade', soursePath + 'pages/**/*.json', soursePath + 'elements/**/*.jade', soursePath + 'elements/**/*.json']
			, 'sass': [soursePath + 'sass/**/*.*', soursePath + 'elements/**/*.sass']
			, 'sassFolder': soursePath + 'sass/'
			, 'img': soursePath + 'img/*.*'
			, 'icons': soursePath + 'img/icons/*.png'
			, 'cssTemplate': soursePath + 'helpers/sprite.template.mustache'
			, 'helpers': soursePath + 'helpers/'
			, 'svgFontsAssets': soursePath + 'svg-font-assets/*.svg'
		}
		, 'build': {
			'vendorJs': buildPath + '/js/vendor/'
			, 'vendorCss': buildPath + '/css/vendor/'
			, 'css': buildPath + '/css/'
			, 'js': buildPath + '/js/'
			, 'fonts': buildPath + '/fonts/'
			, 'build': buildPath
			, 'img': buildPath + '/img/'
		}
	};

module.exports = dirs;