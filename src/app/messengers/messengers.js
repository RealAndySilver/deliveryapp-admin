(function (module) {

    module.controller('MessengersController', ["DetailsDeliveryItemService", "GetMessengersService", "AlertsService", "$state", "$scope",
        function (DetailsDeliveryItemService, GetMessengersService, AlertsService, $state, $scope) {
            var model = this;
            var counter = 0;
            model.showMoreBool = true;
            model.messengers = [];
            model.wasFoundBool = true;

            init();
            //arr= arr.concat(arr2)
            function init() {


                model.getMessengers = function () {
                    //AlertsService.loading();
                    $scope.BootstrapLoading.show(true);
                    GetMessengersService.getMessengers(counter, function (response) {
                        $scope.BootstrapLoading.show(false);
                        model.messengers = model.messengers.concat(response.data);
                        /*console.log(model.messengers.length);*/
                        if (response.data.length === 0) {
                            model.showMoreBool = false;
                        }

                        if (response.response) {
                            counter++;
                        }
                        if (!response.data) {
                            /*AlertsService.showAlert(response.msg, "");*/
                            $scope.BootstrapModal.show(response.msg, "");
                        } else if (model.messengers.length === 0) {
                            /*AlertsService.showAlert("No se encuentran usuarios registrados en este momento.", "");*/
                            $scope.BootstrapModal.show("No se encuentran usuarios registrados en este momento.", "");
                        }
                    });
                };
                model.getMessengers();

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
                        $scope.BootstrapLoading.show(true);
                        GetMessengersService.deleteMessenger(idMessenger, function (response) {
                            /*console.log(response);*/
                            /*AlertsService.cancel();*/
                            $scope.BootstrapModal.restore();
                            $scope.BootstrapLoading.show(false);
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

            }
        }]);

}(angular.module("appMensajeria.messengers")));