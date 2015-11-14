/*! *//*!
 * ~~~~~~~~~~~~~~~~~~
 * Flexy - ·¬ê≈Ú
 * https://github.com/crewstyle/flexy
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 20xx Achraf Chouk (http://github.com/crewstyle)
 */

module.exports = function (grunt){
    //------ [REGISTER CONFIGURATION] ------//

    grunt.initConfig({
        //project settings
        yohoho: {
            name: 'flexy',
            path: {
                bow: 'bower_components',
                src: '.',
                tar: 'dist'
            }
        },

        //packages are listed here
        pkg: grunt.file.readJSON('package.json'),

        //JShint validation
        jshint: {
            all: [
                '<%= yohoho.path.src %>/<%= yohoho.name %>.js'
            ]
        },

        //1. remove any previously-created files
        clean: [
            '<%= yohoho.path.tar %>/*',
            '<%= yohoho.path.tar %>/standalone/*',
        ],

        //2. uglify JS files
        uglify: {
            options: {
                preserveComments: 'some'
            },
            my_target: {
                files: {
                    //JS version including jQuery package
                    '<%= yohoho.path.tar %>/<%= yohoho.name %>.min.js': [
                        //jQuery
                        '<%= yohoho.path.bow %>/jquery/dist/jquery.js',
                        //Main
                        '<%= yohoho.path.src %>/<%= yohoho.name %>.js'
                    ],
                    //JS version without jQuery package
                    '<%= yohoho.path.tar %>/standalone/<%= yohoho.name %>.min.js': [
                        '<%= yohoho.path.src %>/<%= yohoho.name %>.js'
                    ]
                }
            }
        }
    });

    //------ [REGISTER MODULES] ------//

    //remove any previously-created files
    grunt.loadNpmTasks('grunt-contrib-clean');

    //JShint validation
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //uglify JS files
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //------ [REGISTER TASKS] ------//

    //JShint validation task: grunt hint
    grunt.registerTask('test',      ['jshint']);

    //default task: `grunt default` / `grunt`
    grunt.registerTask('default',   ['clean','uglify']);
};
