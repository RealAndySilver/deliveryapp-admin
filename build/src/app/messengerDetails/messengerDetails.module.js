(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('messengerDetails', {
            url: '/messengerdetails/:id',
            views: {
                "main": {
                    controller: 'MessengerDetailsController as model',
                    templateUrl: 'messengerDetails/messengerDetails.tpl.html'
                }
            },
            data:{ pageTitle: 'MessengerDetails' }
        });
    }]);

}(angular.module("appMensajeria.messengerDetails", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('messengerDetails', {
            url: '/messengerdetails/:id',
            views: {
                "main": {
                    controller: 'MessengerDetailsController as model',
                    templateUrl: 'messengerDetails/messengerDetails.tpl.html'
                }
            },
            data:{ pageTitle: 'MessengerDetails' }
        });
    }]);

}(angular.module("appMensajeria.messengerDetails", [
    'ui.router'
])));
