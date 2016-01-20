module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            src: {
                files: ['src/**/*.scss', 'src/**/*.html'],
                tasks: ['compass:dev', 'htmlmin:dev', 'postcss']
            },
            options: {
                livereload: true
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'src/style/sass',
                    cssDir: 'dist/css',
                    noLineComments: false,
                    outputStyle: 'compressed'
                }
            }
        },
        htmlmin: {
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/templates/index.html',
                    'dist/news/show.html': 'src/templates/news/show.html'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'Android 2.3',
                            'Android >= 4',
                            'Chrome >= 20',
                            'Firefox >= 24',
                            'Explorer >= 8',
                            'iOS >= 6',
                            'Opera >= 12',
                            'Safari >= 6'
                        ]
                    }),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
};