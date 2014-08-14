module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


	grunt.initConfig({
		jshint: 
		{
        	options: {

	            browser: true,
	            curly: true,
	            eqeqeq: true,
	            newcap: true,
	            undef: true,
	            eqnull: true,
	            node: true,
        
	        globals: 
	        {

	        	'USGS': false,
	        	//
	        	// common stuff below
	        	//
	            'exports': true,
	            'Ext': true,
	            'dojo': false,
	            'console': false,
	            'alert': false,
	            'prompt': false,
	        	'Siesta': false,
	        	'StartTest': true,
	        	'esri': false,
	        	'describe': false,
	        	't' : false

	        }
		},
//	    all: ['Gruntfile.js', 'app/**/*.js']
		
		gruntfile: {
			src: 'Gruntfile.js'
		},

		siesta: {
			src: 'siesta_test.js'
		},
		
		common: {
			src: [ 'common/src/**/*.js' ]
		}
	  }

	});

	grunt.registerTask('default', 'jshint');

};