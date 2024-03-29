(function(module) {

	module.service('DetailsDeliveryItemService', ['ServerComunicator', function(ServerComunicator) {
		var model = this;

		init();

		function init() {

			model.serviceDetails = function(id, callback) {
				var detailsPromise = ServerComunicator.getDeliveryItemDetails(id);
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

			model.deleteDeliveryItem = function(idItem, idUser, callback) {
				var detailsPromise = ServerComunicator.deleteDeliveryItem(idItem, idUser);
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


			model.restartDeliveryItem = function(idItem, idUser, callback) {
				var detailsPromise = ServerComunicator.restartDeliveryItem(idItem, idUser);
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


			model.getMessengerEmail = function(emailMessenger, callback) {
				var detailsPromise = ServerComunicator.getMessengerEmail(emailMessenger);
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


			model.assingMessenger = function(idItem, messenger_info, callback) {
				var detailsPromise = ServerComunicator.assingMessenger(idItem, messenger_info);
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


			model.changeStatus = function(idItem, status, messenger_info, callback) {
				var detailsPromise = ServerComunicator.changeStatus(idItem, status, messenger_info);
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


			model.abortService = function(idItem, messenger_info, callback) {
				var detailsPromise = ServerComunicator.abortService(idItem, messenger_info);
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

}(angular.module("appMensajeria.serviceDetails")));