(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('userDetails', {
            url: '/userdetails/:id',
            views: {
                "main": {
                    controller: 'UserDetailsController as model',
                    templateUrl: 'userDetails/userDetails.tpl.html'
                }
            },
            data:{ pageTitle: 'UserDetails' }
        });
    }]);

}(angular.module("appMensajeria.userDetails", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('userDetails', {
            url: '/userdetails/:id',
            views: {
                "main": {
                    controller: 'UserDetailsController as model',
                    templateUrl: 'userDetails/userDetails.tpl.html'
                }
            },
            data:{ pageTitle: 'UserDetails' }
        });
    }]);

}(angular.module("appMensajeria.userDetails", [
    'ui.router'
])));
