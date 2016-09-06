(function (module) {

    module.controller('ServiceController', ["AlertsService", "ServicesService", "$state", "$scope", "$timeout",
        function (AlertsService, ServicesService, $state, $scope, $timeout) {
            var model = this;

            model.pagingInfo={currentPage:1,pageSize:10,totalRecords:0};
            model.currentServices=[];
            model.selectedServiceType="available";
            model.serviceTypes = [
                {key:"available",text:"Disponible"},
                {key:"accepted",text:"Aceptado"},
                {key:"in-transit",text:"En Tránsito"},
                {key:"delivered",text: "Entregado"},
                {key:"returning",text:"De vuelta"},
                {key:"returned",text:"Devuelto"}];


            model.goToServiceDetails = function(idObject) {
                $state.go('serviceDetails', {
                    id: idObject,
                });
            };


            model.loadServicesByType=function(typeSelected,pageSelected){
                if (!pageSelected){
                    pageSelected=model.pagingInfo.currentPage;
                }
                var recordsToSkip=(pageSelected-1);
                ServicesService.listByType(typeSelected,recordsToSkip, function(response){
                    if (response.response) {
                        model.currentServices = response.data;
                        updatePagingInfo(pageSelected,response.total);
                    } else {
                        $scope.BootstrapModal.show('No existen servicios con los parámetros seleccionados.');
                    }
                });
            };

            var updatePagingInfo=function(currPage,totRecords){
                model.pagingInfo.currentPage=currPage;
                model.pagingInfo.totalRecords=totRecords;
            };
            
            var init = function () {
                model.loadServicesByType(model.selectedServiceType,model.pagingInfo.currentPage);
            };

            init();
        }]);

}(angular.module("appMensajeria.services")));