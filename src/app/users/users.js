(function (module) {

    module.controller('UsersController', ["RequestMessengerService", "GetUsersService", "AlertsService", "$state", "$scope",
        function (RequestMessengerService, GetUsersService, AlertsService, $state, $scope) {
            var model = this;
            var counter = 0;
            model.showMoreBool = true;
            model.users = [];

            init();

            function init() {

                model.getUsers = function () {
                    $scope.BootstrapLoading.show(true);
                    GetUsersService.getUsers(counter, function (response) {
                        $scope.BootstrapLoading.show(false);
                        model.users = model.users.concat(response.data);
                        if (response.data.length === 0) {
                            model.showMoreBool = false;
                        }
                        if (response.response) {
                            counter++;
                        }
                        if (!response.data) {
                            //AlertsService.showAlert(response.msg, "");
                            $scope.BootstrapModal.show(response.msg, "");
                        } else if (model.users.length === 0) {
                            //AlertsService.showAlert("No se encuentran usuariso registrados en este momento.", "");
                            $scope.BootstrapModal.show("No se encuentran usuarios registrados en este momento.", "");
                        }
                    });
                };
                model.getUsers();

                model.goToUserDetails = function (idUser) {
                    $state.go('userDetails', {
                        id: idUser
                    });

                };

                model.deleteUser = function (idUser) {
                    /*AlertsService.loading();*/
                    $scope.BootstrapLoading.show(true);
                    GetUsersService.deleteUser(idUser, function (response) {
                        console.log(response);
                        /*AlertsService.cancel();*/
                        $scope.BootstrapLoading.show(false);
                        if (!response.data) {
                            /*AlertsService.showAlert(response.msg, "");*/
                            $scope.BootstrapModal.show(response.msg, "Confirmación de eliminación");
                            $state.go($state.current,{},{ reload:true });
                        } else if (model.users.length === 0) {
                            /*AlertsService.showAlert("No tienes servicios Activos en este momento", "");*/
                            $scope.BootstrapModal.show("No tienes Servicios Activos en este momento", "");
                        }
                    });
                };


                model.searchUser = function () {
                    RequestMessengerService.getUserEmail(model.emailSearchUser, function (response) {
                        model.userInformation = response.data;
                        console.log(response);
                        console.log(response.error);
                        if (response.response) {
                            model.errorSearch = '';
                            //AlertsService.showAlert("El usuario fue encontrado", "");

                        }else if(response.msg  == 'not found'){
                            model.errorSearch = 'Usuario no encontrado';
                        } else {
                            //AlertsService.showAlert(response.msg, "");
                        }
                    });
                };


            }
        }]);

}(angular.module("appMensajeria.users")));