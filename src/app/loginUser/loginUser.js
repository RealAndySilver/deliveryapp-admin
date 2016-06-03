(function (module) {

    module.controller('LoginUserController', ['LoginUserService', '$state', 'User', 'Session', 'RecoverPassword', "$scope", function (LoginUserService, $state, User, Session, RecoverPassword, $scope) {
            var model = this;
            model.rememberMe = false;
            model.MY_FORM = "";

            init();

            function init() {

                $scope.$watch('loginForm', function (newValue) {
                    if (newValue) {
                        model.MY_FORM = $scope.loginForm;
                        //model.autoLogin();
                    }

                });

                model.recoverAlert = function () {
                    $scope.BootstrapModal.show("Te hemos enviado un correo electrónico para que puedas recuperar tu contraseña.");
                    /*$mdDialog.show(
                     $mdDialog.alert()
                     .content('Te hemos enviado un correo electrónico para que puedas recuperar tu contraseña.')
                     .ariaLabel('recover password')
                     .ok('Aceptar')
                     .disableParentScroll(false)
                     );*/
                };

                model.loginUser = function () {

                    if (model.MY_FORM.$valid) {
                        //
                        LoginUserService.loginUser(model.user.email, model.user.password, function (response) {
                            console.log("r" , response);
                            //var user = response.data;
                            //

                            if (!response.response) {
                                $scope.BootstrapModal.show("sss" + response.msg);
                                //AlertsService.showAlert(response.msg, "");
                            } else if (response.data) {

                                //User = user;
                                //console.log(User);
                                Session.setUser("true");
                                //$state.go('profile');
                                $state.go('profile');
                            } else {
                                //AlertsService.showAlert('Usuario o contraseña incorrectos.', '');
                                $scope.BootstrapModal.show('Usuario o contraseña incorrectos.');
                            }

                        });
                    } else {
                        //AlertsService.showSimpleAlert("Completa los campos de email y contraseña");
                        $scope.BootstrapModal.show("Completa los campos de email y contraseña");
                    }

                };

                model.newAccount = function () {
                    console.log("IR A NUEVA CUENTA");
                    $state.go('createUser');
                };

                model.recoverPassword = function () {
                    //IR A LA VENTANA DE RECUPERAR CONTRASEÑA
                    console.log("RECUPERAR CONTRASEÑA");
                    $state.go('recoverPassword');
                };

            }
        }]);

}(angular.module("appMensajeria.loginUser")));