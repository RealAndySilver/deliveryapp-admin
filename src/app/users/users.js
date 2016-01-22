(function(module) {

	module.controller('UsersController', ["RequestMessengerService", "GetUsersService", "AlertsService", "$state", function(RequestMessengerService, GetUsersService, AlertsService, $state) {
		var model = this;
		var counter = 0;
		model.showMoreBool = true;
		model.users = [];

		init();

		function init() {

			model.getUsers = function() {
				AlertsService.loading();
				GetUsersService.getUsers(counter, function(response) {
					model.users = model.users.concat(response.data);
					if (response.data.length === 0) {
						model.showMoreBool = false;
					}

					console.log(model.users);
					AlertsService.cancel();
					if (response.response) {
						counter++;
					}
					if (!response.data) {
						AlertsService.showAlert(response.msg, "");
					} else if (model.users.length === 0) {
						AlertsService.showAlert("No se encuentran usuariso registrados en este momento.", "");
					}
				});
			};
			model.getUsers();

			model.goToUserDetails = function(idUser) {
				$state.go('userDetails', {
					id: idUser
				});

			};

			model.deleteUser = function(idUser) {
				console.log("ID USER", idUser);
				AlertsService.loading();
				GetUsersService.deleteUser(idUser, function(response) {
					console.log(response);
					AlertsService.cancel();
					if (!response.data) {
						AlertsService.showAlert(response.msg, "");
					} else if (model.users.length === 0) {
						AlertsService.showAlert("No tienes servicios Activos en este momento", "");
					}
				});
			};


			model.searchUser = function() {
				RequestMessengerService.getUserEmail(model.emailSearchUser, function(response) {
					model.userInformation = response.data;
					console.log(model.userInformation);
					if (response.response) {
						//AlertsService.showAlert("El usuario fue encontrado", "");

					} else {
						//AlertsService.showAlert(response.msg, "");
					}
				});
			};


		}
	}]);

}(angular.module("appMensajeria.users")));