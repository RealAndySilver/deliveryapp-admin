(function(module) {

    module.controller('ActiveServicesController', ["Session", "ActiveServicesService", "$state", "$mdDialog",'AlertsService', function(Session, ActiveServicesService, $state, $mdDialog,AlertsService) {
        var model = this;
        model.User = (Session.getUser());
        model.showMoreBool=true;
        var counter=0;
        model.activeServices=[];

        init();

        function init() {

            model.getAllDeliveryItemByStatus = function() {
                AlertsService.loading();
                ActiveServicesService.getAllDeliveryItemByStatus("available",counter, function(response) {
                    model.activeServices = model.activeServices.concat(response.data);
                    console.log(model.activeServices);
                    AlertsService.cancel();
                    if(response.response){
                        counter++;
                    }
                    if(response.data.length===0){
                        model.showMoreBool=false;
                    }
                    if(!response.data){
                        AlertsService.showAlert(response.msg, "");
                    }else if(model.activeServices.length===0){
                        AlertsService.showAlert("No tienes servicios Activos en este momento","");
                    }
                });
            };
            model.getAllDeliveryItemByStatus();

            model.goToServiceDetails = function(idObject) {
                $state.go('serviceDetails', {
                    id: idObject
                });
            };

        }
    }]);

}(angular.module("appMensajeria.activeServices")));