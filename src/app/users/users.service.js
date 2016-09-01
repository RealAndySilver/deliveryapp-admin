(function(module) {

	module.service('GetUsersService', ['ServerComunicator', function(ServerComunicator) {
		var model = this;

		init();

		function init() {

			model.getUsers = function(skip,callback) {
				var detailsPromise = ServerComunicator.getUsers(skip);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message|| response.data.error,
							data: response.data.response,
							total: response.data.total,
						});
					},
					function error(e) {
						callback({
							response: false,
							msg: 'Ocurrio un error por favor intente más tarde o compruebe su conexión a internet',
							error: e,
						});
					});
			};

			model.activateUser = function(userEmail,callback) {
				var detailsPromise = ServerComunicator.activateUser(userEmail);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message|| response.data.error,
							data: response.data.response,
						});
					},
					function error(e) {
						callback({
							response: false,
							msg: 'Ocurrio un error por favor intente más tarde o compruebe su conexión a internet',
							error: e,
						});
					});
			};

			model.deleteUser = function(idUser,callback) {
				var detailsPromise = ServerComunicator.deleteUser(idUser);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message|| response.data.error,
							data: response.data.response,
						});
					},
					function error(e) {
						callback({
							response: false,
							msg: 'Ocurrio un error por favor intente más tarde o compruebe su conexión a internet',
							error: e,
						});
					});
			};

		}
	}]);

}(angular.module("appMensajeria.users")));