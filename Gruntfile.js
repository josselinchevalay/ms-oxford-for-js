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
        }
        
    });
    
    
    // Add the grunt-mocha-test tasks. 
    grunt.loadNpmTasks('grunt-mocha-test');
    
    
    // Add Task
    grunt.registerTask('default', ['mochaTest']);
};