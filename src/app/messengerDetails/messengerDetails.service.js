(function(module) {

	module.service('MessengerDetailsService', ['ServerComunicator', function(ServerComunicator) {
		var model = this;

		init();

		function init() {

			model.getMessenger = function(idMessenger, callback) {
				var detailsPromise = ServerComunicator.getMessenger(idMessenger);
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

			model.updateMessengerProfile = function(idMessenger, name, lastname, mobilephone,plate, callback) {
				var detailsPromise = ServerComunicator.updateMessengerProfile(idMessenger, name, lastname, mobilephone,plate);
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

			model.getServiceByOverallStatus = function(overall_status, idMessenger, callback) {
				var detailsPromise = ServerComunicator.getServiceByOverallStatus(overall_status, idMessenger);
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

			model.activateMessenger = function(idMessenger, callback) {
				var detailsPromise = ServerComunicator.activateMessenger(idMessenger);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
							data: response.data.response
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

			model.deactivateMessenger = function(idMessenger, callback) {
				var detailsPromise = ServerComunicator.deactivateMessenger(idMessenger);
				detailsPromise.then(
					function success(response) {
						callback({
							response: response.data.status,
							msg: response.data.message || response.data.error,
							data: response.data.response
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

}(angular.module("appMensajeria.messengerDetails")));