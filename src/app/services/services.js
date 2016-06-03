(function (module) {

    module.controller('ServiceController', ["AlertsService", "ServicesService", "$state", "$scope", "$timeout",
        function (AlertsService, ServicesService, $state, $scope, $timeout) {
            var model = this;

            var init = function () {
                model.services = {};
                model.serviceTypes = [
                    "Disponible",
                    "Aceptado",
                    "En Tránsito",
                    "Entregado",
                    "De vuelta",
                    "Devuelto",
                    "Cancelado",
                    "Abortado"
                ];

                var loadServicesByType = function (type, sort, callback) {
                    ServicesService.listByType(type, sort, callback);
                };

                model.loadServicesAvailable = function (sort) {
                    loadServicesByType('available', sort, function (response) {
                        
                        if (response.response) { 
                            
                            model.services.available = response.data;
                            console.log('get available services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServicesAccepted = function(sort){
                    loadServicesByType('accepted', sort, function (response) {
                        
                        /*console.log(model.services.accepteds);*/
                        if (response.response) { 
                            
                            model.services.accepteds = response.data;
                            console.log('get accepted services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServicesInTransit = function(sort){
                    loadServicesByType('in-transit', sort, function (response) {
                        
                        /*console.log(model.services.inTransits);*/
                        if (response.response) { 
                            
                            model.services.inTransits = response.data;
                            console.log('get in transit services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServiceDelivered = function(sort){
                    
                    loadServicesByType('delivered', sort, function (response) {
                        /*console.log(model.services.delivereds);*/
                        if (response.response) { 
                            
                            model.services.delivereds = response.data;
                            console.log('get delivered services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServiceReturning = function(sort){
                    
                    loadServicesByType('returning', sort, function (response) {
                        if (response.response) { 
                            
                            model.services.returning = response.data;
                            console.log('get returning services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServiceReturned = function(sort){
                    
                    loadServicesByType('returned', sort, function (response) {
                        /*console.log(model.services.returneds);*/
                        if (response.response) { 
                            
                            model.services.returneds = response.data;
                            console.log('get returned services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServiceCancelled = function(sort){
                    
                    loadServicesByType('cancelled', sort, function (response) {
                        /*console.log(model.services.cancelleds);*/
                        if (response.response) { 
                            
                            model.services.cancelleds = response.data;
                            console.log('get cancelled services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.loadServiceAborted = function(sort){
                    
                    loadServicesByType('aborted', sort, function (response) {
                        
                        /*console.log(model.services.aborteds);*/
                        if (response.response) { 
                            
                            model.services.aborteds = response.data;
                            console.log('get aborted services response ', response);
                            /*console.log(model.services.available);*/
                        } else {
                            $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                        }
                    });
                };

                model.goToServiceDetails = function(idObject) {
                    $state.go('serviceDetails', {
                        id: idObject,
                    });
                };

                model.loadSelectedService = function(selectedType) {
                    model.services = {};
                    console.log('perrittooooo ', selectedType);
                    switch(selectedType) {
                        case "Disponible":
                            model.loadServicesAvailable();
                            break;
                        case "Aceptado":
                            model.loadServicesAccepted();
                            break;
                        case "En Tránsito":
                            model.loadServicesInTransit();
                            break;
                        case "Entregado":
                            model.loadServiceDelivered();
                            break;
                        case "De vuelta":
                            model.loadServiceReturning();
                            break;
                        case "Devuelto":
                            model.loadServiceReturned();
                            break;
                        case "Cancelado":
                            model.loadServiceCancelled();
                            break;
                        case "Abortado":
                            model.loadServiceAborted();
                            break;
                        /*default:
                            default code block*/
                    }
                };

                
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