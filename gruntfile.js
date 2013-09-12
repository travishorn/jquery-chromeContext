module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      build: {
        files: {
          src: ['lib/js/jquery.chromeContext.js']
        }
      }
    },
    uglify: {
      build: {
        src  : 'lib/js/jquery.chromeContext.js',
        dest : 'dist/js/jquery.chromeContext.min.js'
      }
    },
    cssmin: {
      build: {
        src  : 'lib/css/chromeContext.css',
        dest : 'dist/css/chromeContext.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
  grunt.registerTask('test', ['jshint']);
};