(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('services', {
            url: '/services',
            views: {
                "main": {
                    controller: 'ServiceController as model',
                    templateUrl: 'services/services.tpl.html'
                }
            },
            data:{ pageTitle: 'Servicios' }
        });
    });

}(angular.module("appMensajeria.services", [
    'ui.router'
])));
