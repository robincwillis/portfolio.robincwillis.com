module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		watch: {
			handlebars : {
				files: ['site/templates/*.hbs'],
				tasks: ['handlebars:dist']
			},
			compass : {
				files: ['site/sass/*'],
				tasks: ['compass:dist']
			},
			uglify : {
				files: ['site/src/**/*.js'],
				tasks: ['uglify:dist']
			},
			xmlmin : {
				files: ['site/src/portfolio.xml'],
				tasks: ['xmlmin:dist']
			}
		},
		uglify: {
			dist: {
				options : {
					sourceMap: function (path) {
						return 'site/gallery.min.js.map';
					}
				},
				files: {
					'site/js/gallery.min.js': [
					'site/src/models/*.js',
					'site/src/collections/*.js',
					'site/src/views/*.js',
					'site/src/*js',
					]
				}
			},
			vendor: {
				files: {
					'site/js/vendor.js' : [
					'site/src/vendor/jquery-1.9.1.min.js',
					'site/src/vendor/bootstrap.js',
					'site/src/vendor/underscore.js',
					'site/src/vendor/handlebars.js',
					'site/src/vendor/backbone-min.js',
					'site/src/vendor/jquery.xml2json.js',
					'site/src/vendor/jquery.isotope.min.js',
					'site/src/vendor/swipeview.js'
					]
				}
			}
		},
		compass: {
			dist: {
					options: {
						config: 'config.rb',
						sassDir: 'site/sass',
						cssDir: 'site/css',
						imagesDir: 'site/img'
					}
			}
		},
		handlebars: {
			dist:{
				options : {
						namespace : "portfolio.Templates",
						processName: function(filePath) { // input:  templates/header.hbs
							var pieces = filePath.split("/");
							var nameWithExtension = pieces[pieces.length-1].split(".");
							return nameWithExtension[0]; // output: header
						}
				},
				files: {
					"site/js/templates.js": "site/templates/*.hbs"
				}
			}
		},
		xmlmin: {
			dist: {
				options: {
					preserveComments: true
				},
				files: {
					'site/xml/portfolio.xml': 'site/src/portfolio.xml'
				}
			}
		},
		shell:{
			clean:{
				command : 'rm -rf release'
			},
			release:{
				command : 'cp -r site release; rm -rf release/sass release/src release/templates'
			},
			publish:{
				options: {
					stdout: true,
					stderr: true
				},
				command : 'scp -r release robincwillis@robincwillis.com:public/portfolio'

			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-xmlmin');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('dev', ['build','watch']);
	grunt.registerTask('build', ['uglify:vendor','uglify:dist', 'compass', 'handlebars', 'xmlmin']);
	grunt.registerTask('deploy', ['build','shell:clean', 'shell:release','shell:publish']);
	grunt.registerTask('clean', ['shell:clean']);
	grunt.registerTask('default',['dev']);

};