(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('users', {
            url: '/users',
            views: {
                "main": {
                    controller: 'UsersController as model',
                    templateUrl: 'users/users.tpl.html'
                }
            },
            data:{ pageTitle: 'Users' }
        });
    }]);

}(angular.module("appMensajeria.users", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('users', {
            url: '/users',
            views: {
                "main": {
                    controller: 'UsersController as model',
                    templateUrl: 'users/users.tpl.html'
                }
            },
            data:{ pageTitle: 'Users' }
        });
    }]);

}(angular.module("appMensajeria.users", [
    'ui.router'
])));
