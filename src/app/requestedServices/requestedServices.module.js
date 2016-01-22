(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('requestedServices', {
            url: '/requestedservices',
            views: {
                "main": {
                    controller: 'RequestedServicesController as model',
                    templateUrl: 'requestedServices/requestedServices.tpl.html'
                }
            },
            data:{ pageTitle: 'RequestedServices' }
        });
    });

}(angular.module("appMensajeria.requestedServices", [
    'ui.router'
])));
