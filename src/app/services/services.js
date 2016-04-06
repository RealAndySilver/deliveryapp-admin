(function (module) {

    module.controller('ServiceController', ["AlertsService", "ServicesService", "$state", "$scope", "$timeout",
        function (AlertsService, ServicesService, $state, $scope, $timeout) {
            var model = this;

            var init = function () {
                model.services = {};

                var loadServicesByType = function (type, sort, callback) {
                    ServicesService.listByType(type, sort, callback);
                };

                model.loadServicesAvailable = function (sort) {
                    loadServicesByType('available', sort, function (response) {
                        model.services.available = response.data;
                        console.log('get services response ', response);
                        /*console.log(model.services.available);*/
                    });
                };

                model.loadServicesAccepted = function(sort){
                    loadServicesByType('accepted', sort, function (response) {
                        model.services.accepteds = response.data;
                        /*console.log(model.services.accepteds);*/
                    });
                };

                model.loadServicesInTransit = function(sort){
                    loadServicesByType('in-transit', sort, function (response) {
                        model.services.inTransits = response.data;
                        /*console.log(model.services.inTransits);*/
                    });
                };

                model.loadServiceDelivered = function(sort){
                    loadServicesByType('delivered', sort, function (response) {
                        model.services.delivereds = response.data;
                        /*console.log(model.services.delivereds);*/
                    });
                };

                model.loadServiceReturning = function(sort){
                    loadServicesByType('returning', sort, function (response) {
                        model.services.returning = response.data;
                        /*console.log(model.services.returning);*/
                    });
                };

                model.loadServiceReturned = function(sort){
                    loadServicesByType('returned', sort, function (response) {
                        model.services.returneds = response.data;
                        /*console.log(model.services.returneds);*/
                    });
                };

                model.loadServiceCancelled = function(sort){
                    loadServicesByType('cancelled', sort, function (response) {
                        model.services.cancelleds = response.data;
                        /*console.log(model.services.cancelleds);*/
                    });
                };

                model.loadServiceAborted = function(sort){
                    loadServicesByType('aborted', sort, function (response) {
                        model.services.aborteds = response.data;
                        $scope.BootstrapLoading.show(false);
                        /*console.log(model.services.aborteds);*/
                    });
                };

                model.goToServiceDetails = function(idObject) {
                    $state.go('serviceDetails', {
                        id: idObject
                    });
                };

                $scope.BootstrapLoading.show(true);
                model.loadServicesAvailable();
                /*model.loadServicesAccepted();
                model.loadServicesInTransit();
                model.loadServiceDelivered();
                model.loadServiceReturning();
                model.loadServiceReturned();
                model.loadServiceCancelled();
                model.loadServiceAborted();*/
            };

            init();
        }]);

}(angular.module("appMensajeria.services")));