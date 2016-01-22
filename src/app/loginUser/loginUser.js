(function(module) {

	module.controller('LoginUserController', ['LoginUserService', '$state', '$mdDialog', 'User', 'Session', 'RecoverPassword', 'AlertsService', "$scope", function(LoginUserService, $state, $mdDialog, User, Session, RecoverPassword, AlertsService, $scope) {
		var model = this;
		model.rememberMe = false;
		model.MY_FORM = "";

		init();

		function init() {

			$scope.$watch('loginForm', function(newValue) {
				if (newValue) {
					model.MY_FORM = $scope.loginForm;
					model.autoLogin();
				}

			});

			model.recoverAlert = function() {
				$mdDialog.show(
					$mdDialog.alert()
					.content('Te hemos enviado un correo electrónico para que puedas recuperar tu contraseña.')
					.ariaLabel('recover password')
					.ok('Aceptar')
					.disableParentScroll(false)
				);
			};

			model.loginUser = function() {

				if (model.MY_FORM.$valid) {
					AlertsService.loading();
					LoginUserService.loginUser(model.user.email, model.user.password, function(response) {
						console.log(response);
						//var user = response.data;
						AlertsService.cancel();

						if (!response.response) {
							AlertsService.showAlert(response.msg, "");
						} else if (response.data) {

							//User = user;
							//console.log(User);
							Session.setUser("true");
							//$state.go('profile');
							$state.go('profile');
						} else {
							AlertsService.showAlert('Usuario o contraseña incorrectos.', '');
						}



					});
				} else {
					AlertsService.showSimpleAlert("Completa los campos de email y contraseña");
				}

			};

			model.newAccount = function() {
				console.log("IR A NUEVA CUENTA");
				$state.go('createUser');
			};

			model.recoverPassword = function() {
				//IR A LA VENTANA DE RECUPERAR CONTRASEÑA
				console.log("RECUPERAR CONTRASEÑA");
				$state.go('recoverPassword');
			};






		}
	}]);

}(angular.module("appMensajeria.loginUser")));