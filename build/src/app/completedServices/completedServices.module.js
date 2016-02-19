(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('completedServices', {
            url: '/completedservices',
            views: {
                "main": {
                    controller: 'CompletedServicesController as model',
                    templateUrl: 'completedServices/completedServices.tpl.html'
                }
            },
            data:{ pageTitle: 'CompletedServices' }
        });
    }]);

}(angular.module("appMensajeria.completedServices", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('completedServices', {
            url: '/completedservices',
            views: {
                "main": {
                    controller: 'CompletedServicesController as model',
                    templateUrl: 'completedServices/completedServices.tpl.html'
                }
            },
            data:{ pageTitle: 'CompletedServices' }
        });
    }]);

}(angular.module("appMensajeria.completedServices", [
    'ui.router'
])));
