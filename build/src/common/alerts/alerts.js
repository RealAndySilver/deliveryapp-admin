(function(module) {

	module.service('AlertsService', ['$mdDialog', "$state", function($mdDialog, $state) {
		var model = this;
		var confirm;

		init();

		function init() {

			model.showAlert = function(message, action) {

				confirm = $mdDialog.confirm()
					.title('Alerta')
					.content(message)
					.ariaLabel('')
					.ok('Aceptar')
					.cancel('');
				$mdDialog.show(confirm).then(function() {
					if (action === "goProfile") {
						$state.go("profile");
					} else
					if (action === "goHome") {
						$state.go("loginUser");
					}
					if (action === "goAborted") {
						$state.go("abortedServices");
					}
				}, function() {
					//$scope.alert = 'You decided to keep your debt.';
				});
			};

			//////////////////////////////////////
			model.showSimpleAlert = function(message) {
				$mdDialog.show(
					$mdDialog.alert()
					.title("Alerta")
					.content(message)
					.ariaLabel('Alert Dialog Demo')
					.ok("Ok")
				);
			};

			//////////////////////////////////////


			model.loading = function() {
				console.log("ENTRO ");
				//$mdDialog.escapeToClose(false);
				$mdDialog.show({
						controller: DialogController,
						templateUrl: 'alerts/loadingDialog.tpl.html',


					})
					.then(function(answer) {

						//AQUI SE METE LA LOGICA DE LO QUE QUIERO HACER
						if (answer === "cancel") {
							model.cancel();

						}
					});
			};

			function DialogController() {
				model.hide = function() {
					$mdDialog.hide();
				};
				model.cancel = function() {
					$mdDialog.cancel();
				};
				model.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}

		}
	}]);

}(angular.module("appMensajeria.alerts", [])));