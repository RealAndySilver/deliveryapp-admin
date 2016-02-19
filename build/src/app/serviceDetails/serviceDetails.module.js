(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('serviceDetails', {
            url: '/servicedetails/:id',
            views: {
                "main": {
                    controller: 'ServiceDetailsController as model',
                    templateUrl: 'serviceDetails/serviceDetails.tpl.html'
                }
            },
            data:{ pageTitle: 'ServiceDetails' }
        });
    }]);

}(angular.module("appMensajeria.serviceDetails", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('serviceDetails', {
            url: '/servicedetails/:id',
            views: {
                "main": {
                    controller: 'ServiceDetailsController as model',
                    templateUrl: 'serviceDetails/serviceDetails.tpl.html'
                }
            },
            data:{ pageTitle: 'ServiceDetails' }
        });
    }]);

}(angular.module("appMensajeria.serviceDetails", [
    'ui.router'
])));
