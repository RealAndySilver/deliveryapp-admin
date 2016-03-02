(function (module) {

    module.controller('ServiceDetailsController', ["$scope", "$state", '$mdDialog', "$stateParams", "DetailsDeliveryItemService", "User", "AlertsService", "$interval", function ($scope, $state, $mdDialog, $stateParams, DetailsDeliveryItemService, User, AlertsService, $interval) {
        var model = this;
        model.reloadBool = false;
        model.leftTime = "10s";
        model.code = "aaaa";

        model.addNewMessengerBool = false;

        var id;
        model.deliveryItemInfo = {};
        init();

        function init() {

            model.serviceDetails = serviceDetails;

            function serviceDetails() {
                if (model.messengerBool) {
                    /*AlertsService.loading();*/
                    $scope.BootstrapLoading.show(true);
                }

                DetailsDeliveryItemService.serviceDetails($stateParams.id, function (response) {

                    if (model.messengerBool) {
                        /*AlertsService.cancel();*/
                        $scope.BootstrapLoading.show(false);
                    }

                    model.deliveryItemInfo = response.data;
                    /*console.log("EL deliveryItemInfo", model.deliveryItemInfo);*/
                    model.serviceStatus = traslateStatusFunction(response.data["status"]);
                    model.pickupDate = new Date(model.deliveryItemInfo["pickup_time"]);
                    model.estimated = new Date(model.deliveryItemInfo["estimated"]);
                    nowDate = new Date();
                    model.leftTime = parseInt((model.estimated.getTime() - nowDate.getTime()) / 60000);
                    if (model.leftTime   < 0) {
                        model.leftTime = "Retrasado";
                    }

                    if (response.data.messenger_info) {
                        model.messenger_info1 = response.data.messenger_info;
                        model.messengerBool = true;
                        model.reloadBool = false;
                    } else {
                        model.messengerBool = false;
                        model.reloadBool = true;
                    }

                    if (!model.reloadBool) {
                        clearInterval(id);
                    }


                    if (response.data.images.length !== 0) {

                        model.imageBool = true;
                        model.images = response.data.images;
                    } else {
                        model.imageBool = false;

                    }

                    if (response.data["overall_status"] == "aborted") {
                        model.serviceStatus = traslateStatusFunction(response.data["overall_status"]);
                        model.newState = response.data["overall_status"];
                    } else {
                        model.serviceStatus = traslateStatusFunction(response.data["status"]);
                        model.newState = response.data["status"];
                    }
                    model.newState = response.data["status"];
                });
            }

            model.serviceDetails();

            model.cancelService = function () {
                $scope.BootstrapModal.save();
                model.abortService = function () {
                    /*console.log(model.deliveryItemInfo);*/
                    model.messenger_info1.abort_reason = "Cancelado por el admin";
                    DetailsDeliveryItemService.abortService(model.deliveryItemInfo._id, model.messenger_info1, function (response) {
                        $scope.BootstrapModal.restore();
                        /*console.log(response);*/
                        if (response.response) {
                            model.serviceDetails();
                            /*AlertsService.cancel();*/
                            $scope.BootstrapModal.show("El servicio fue eliminado correctamente", "Eliminación del servicio");
                            /*console.log($state.current);*/                            $state.go( $state.current, {}, {reload: true});
                        } else {
                            $scope.BootstrapModal.show(response.msg);
                        }
                    });
                };

                $scope.BootstrapModal.config.buttons.cancel.show = true;
                $scope.BootstrapModal.config.buttons.cancel.label = "Volver";
                $scope.BootstrapModal.config.buttons.accept.label = "SI deseo cancelarlo";
                $scope.BootstrapModal.config.buttons.accept.action = model.abortService;
                /*console.log($scope.BootstrapModal);*/
                $scope.BootstrapModal.show("Deseas cancelar el servicio.", "Confirmación de eliminación");


                /*
                 var confirm = $mdDialog.confirm()
                 .title('Alerta')
                 .content('Deseas cancelar el servicio.')
                 .ariaLabel('')
                 .ok('Cancelar Servicio')
                 .cancel('Volver');

                 $mdDialog.show(confirm).then(function() {
                 AlertsService.loading();

                 model.abortService();
                 });
                 */
            };


            model.searchMessenger = function () {
                $scope.BootstrapLoading.show(true);
                DetailsDeliveryItemService.getMessengerEmail(model.emailSearchMessenger, function (response) {
                    model.messenger_info = response.data;
                    /*console.log(model.messenger_info);*/
                    $scope.BootstrapLoading.show(false);
                    if (response.response) {
                        $scope.BootstrapModal.show("El mensajero fue encontrado", "Resultado Busqueda");
                        model.reload();
                    } else {
                        $scope.BootstrapModal.show(response.msg, "");
                    }
                });
            };

            model.assingMessenger = function () {
                /*idItem, messenger_info*/
                DetailsDeliveryItemService.assingMessenger(model.deliveryItemInfo._id, model.messenger_info, function (response) {

                    /*console.log(response);*/
                    if (response.response) {
                        $scope.BootstrapModal.show("Se asigno el mensajero correctamente", "Resultado Asignación");
                        model.reload();
                    } else {
                        $scope.BootstrapModal.show(response.msg, "");
                    }
                });
            };

            model.removeMessenger = function () {
                //idItem, status,messenger_info
                /*console.log("ID PEDIDO", model.deliveryItemInfo._id);*/
                /*console.log("ID USER", model.deliveryItemInfo.user_id);*/
                DetailsDeliveryItemService.changeStatus(model.deliveryItemInfo._id, "available", model.deliveryItemInfo.messenger_info, function (response) {

                    /*console.log(response);*/                    if (response.response) {
                        $scope.BootstrapModal.show("El estado fue cambiado exitosamente", "Resultado operación");
                        model.reload();
                    } else {
                        $scope.BootstrapModal.show(response.msg, "");
                    }
                });
            };

            model.changeStatus = function () {
                /*idItem, status,messenger_info*/
                DetailsDeliveryItemService.changeStatus(model.deliveryItemInfo._id, model.newState, model.deliveryItemInfo.messenger_info, function (response) {

                    /*console.log(response);*/
                    if (response.response) {
                        $scope.BootstrapModal.show("El estado fue cambiado exitosamente", "Resultado Operación");
                        model.reload();
                    } else {
                        $scope.BootstrapModal.show(response.msg, "");
                    }
                });
            };


            model.showBigImage = function (url) {
                /*console.log('url', url);*/
                model.currentUrl = url;

                $mdDialog.show({
                        controller: 'DialogController',
                        templateUrl: 'serviceDetails/showBigImage.tpl.html',
                        resolve: {
                            'imageUrl': function () {
                                /*console.log('url', url);*/                                return url;
                            }
                        }

                    })
                    .then(function (answer) {


                    });
            };


            model.reload = function () {
                /*$state.reload();*/
                model.serviceDetails();
            };
        }
    }]);

    module.controller('DialogController', ['$scope', 'imageUrl', function ($scope, imageUrl) {
        $scope.currentUrl = imageUrl;
    }]);

}(angular.module("appMensajeria.serviceDetails")));


function traslateStatusFunction(status) {
    var traslateStatus = "";
    if (status == "available") {
        traslateStatus = "Disponible";
    } else if (status == "accepted") {
        traslateStatus = "Aceptado";
    } else if (status == "in-transit") {
        traslateStatus = "En tránsito";
    } else if (status == "returning") {
        traslateStatus = "Volviendo";
    } else if (status == "returned") {
        traslateStatus = "Finalizado";
    } else if (status == "delivered") {
        traslateStatus = "Finalizado";

    } else if (status == "aborted") {
        traslateStatus = "Abortado";

    }
    return traslateStatus;
}