module.exports = function(grunt){    
    // config
    grunt.initConfig({
        
        // unit testing
        mochaTest : {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt', // Optionally capture the reporter output to a file 
                    quiet: false, // Optionally suppress output to standard out (defaults to false) 
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
                },
                src: ['test/**/*.js']
            }
        },        
        // jshint
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        }
        
    });
    
    
    // Add the NPM deb 
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
   
    
    // Add Task
    grunt.registerTask('default', ['jshint','mochaTest']);
};