module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: "\r\n",
                stripBanners: true
            },
            dist: {
                src: [
                    'source/StaticObservable.php',
                    'source/Configure/Configure.php',
                    'source/Configure/exception.php',
                    'source/Debug/Debug.php',
                    'source/Debug/baseRenderer.php',
                    'source/Debug/ErrorRenderer.php',
                    'source/Debug/ExceptionRenderer.php',
                    'source/DB.php',
                    'source/DBSimple.php',
                    'source/UParser.php',
                    'source/Model.php',
                    'source/Exception.php',
                    'source/View/View.php',
                    'source/View/Exception.php',
                    'source/Controller/Controller.php',
                    'source/Response/Response.php',
                    'source/Response/HttpResponse.php',
                    'source/Response/JsonResponse.php',
                    'source/Dispatcher/Dispatcher.php',
                    'source/Dispatcher/Route.php',
                    'source/Dispatcher/HttpRoute.php',
                    'source/Dispatcher/RouteException.php',
                    'source/Request/Request.php',
                    'source/Request/HttpRequest.php',
                    'source/Request/ValidationException.php',
                    'source/Request/Validator/Validator.php',
                    'source/Request/Validator/Email.php',
                    'source/Request/Validator/Integer.php',
                    'source/Request/Validator/Url.php'
                ],
                dest: 'release/0.5/faid-0.5.php'
            }
        },
        phpunit: {
            api: {
                dir: 'tests/configure/'
            },
            controller: {
                dir: 'tests/Controller/'
            },
            dispatcher: {
                dir: 'tests/Dispatcher/'
            },
            staticobservable: {
                dir: 'tests/StaticObservable/'
            },
            view: {
                dir: 'tests/View/'
            },


            options: {
                bin : '/Users/gisma/.composer/vendor/bin/phpunit',
                bootstrap: 'tests/loader.php',
                colors: true
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-phpunit');

    grunt.registerTask('default', ['concat']);
};