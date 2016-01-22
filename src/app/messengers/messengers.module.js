(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('messengers', {
            url: '/messengers',
            views: {
                "main": {
                    controller: 'MessengersController as model',
                    templateUrl: 'messengers/messengers.tpl.html'
                }
            },
            data:{ pageTitle: 'Messengers' }
        });
    });

}(angular.module("appMensajeria.messengers", [
    'ui.router'
])));
