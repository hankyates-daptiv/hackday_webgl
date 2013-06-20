/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 9001
                }
            }
        }
    });

    // Default task.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect']);

};
