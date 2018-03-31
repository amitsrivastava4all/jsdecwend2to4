module.exports = function(grunt){
console.log("Grunt Start....");
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
              files: {
                'dist/ctrl-release.min.js': ['controller/*.js']
              }
            }
          }
    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify:my_target']);

}