(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('abortedServices', {
            url: '/abortedservices',
            views: {
                "main": {
                    controller: 'AbortedServicesController as model',
                    templateUrl: 'abortedServices/abortedServices.tpl.html'
                }
            },
            data:{ pageTitle: 'AbortedServices' }
        });
    }]);

}(angular.module("appMensajeria.abortedServices", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('abortedServices', {
            url: '/abortedservices',
            views: {
                "main": {
                    controller: 'AbortedServicesController as model',
                    templateUrl: 'abortedServices/abortedServices.tpl.html'
                }
            },
            data:{ pageTitle: 'AbortedServices' }
        });
    }]);

}(angular.module("appMensajeria.abortedServices", [
    'ui.router'
])));
