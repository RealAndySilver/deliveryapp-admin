(function (module) {

    module.controller('MessengersController', ["DetailsDeliveryItemService", "GetMessengersService", "AlertsService", "$state", "$scope",
        function (DetailsDeliveryItemService, GetMessengersService, AlertsService, $state, $scope) {
            var model = this;

            model.pagingInfo={currentPage:1,pageSize:10,totalRecords:0};
            model.messengers = [];
            model.wasFoundBool = true;

            model.getMessengers = function (pageSelected) {
                //AlertsService.loading();

                var recordsToSkip=(pageSelected-1);
                GetMessengersService.getMessengers(recordsToSkip, function (response) {
                    model.messengers = response.data;
                    updatePagingInfo(pageSelected,response.total);
                });

            };
            model.goToMessengerDetails = function (idMessenger) {
                $state.go('messengerDetails', {
                    id: idMessenger
                });
            };

            model.deleteMessenger = function (idMessenger) {
                console.log("ID USER", idMessenger);
                $scope.BootstrapModal.save();
                /*AlertsService.loading();*/
                var remove = function() {

                    GetMessengersService.deleteMessenger(idMessenger, function (response) {
                        /*console.log(response);*/
                        /*AlertsService.cancel();*/
                        $scope.BootstrapModal.restore();

                        if (!response.data) {
                            /*AlertsService.showAlert(response.msg, "");*/
                            $scope.BootstrapModal.show(response.msg, "Resultado Elimininación");
                            $state.go($state.current, {}, {reload: true});
                        } else if (model.users.length === 0) {
                            /*AlertsService.showAlert("No tienes servicios Activos en este momento", "");*/
                            $scope.BootstrapModal.show("No tienes servicios Activos en este momento", "");
                        }
                    });
                };
                $scope.BootstrapModal.config.buttons.cancel.show = true;
                $scope.BootstrapModal.config.buttons.cancel.label = "Volver";
                $scope.BootstrapModal.config.buttons.accept.label = "Si deseo eliminarlo.";
                $scope.BootstrapModal.config.buttons.accept.action = remove;
                $scope.BootstrapModal.show("Deseas eliminar al mensajero.", "Confirmación de eliminación");
            };

            model.searchMessenger = function () {
                DetailsDeliveryItemService.getMessengerEmail(model.emailSearchMessenger, function (response) {
                    model.messenger_info = response.data;
                    console.log(model.messenger_info);
                    if (response.response) {
                        //AlertsService.showAlert("El mensajero fue encontrado", "");
                        model.wasFoundBool = true;

                    } else {
                        model.wasFoundBool = false;
                        //AlertsService.showAlert(response.msg, "");
                    }
                });
            };

            var updatePagingInfo=function(currPage,totRecords){
                model.pagingInfo.currentPage=currPage;
                model.pagingInfo.totalRecords=totRecords;
            };

            init();
            function init() {
                model.getMessengers(model.pagingInfo.currentPage);
            }

        }]);
}(angular.module("appMensajeria.messengers")));