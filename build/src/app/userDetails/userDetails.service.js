(function(module) {

	module.service('UserDetailsService', ['ServerComunicator', function(ServerComunicator) {
		var model = this;

		init();

		function init() {


			model.getUser = function(idUser, callback) {
				var detailsPromise = ServerComunicator.getUser(idUser);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
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

			model.updateProfile = function(idUser, name, lastname, mobilephone, callback) {
				var detailsPromise = ServerComunicator.updateProfile(idUser, name, lastname, mobilephone);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
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



			model.getActiveServices = function(idUser, callback) {
				var detailsPromise = ServerComunicator.getActiveDeliveryItems(idUser);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
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

			model.getAbortedServices = function(idUser, callback) {
				var detailsPromise = ServerComunicator.getAbortedDeliveryItems(idUser);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
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


			model.getCompletedServices = function(idUser, callback) {
				var detailsPromise = ServerComunicator.getCompletedDeliveryItems(idUser);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
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

}(angular.module("appMensajeria.userDetails")));