(function(module) {

	module.controller('ServiceDetailsController', ["$scope", "$state", '$mdDialog', "$stateParams", "DetailsDeliveryItemService", "User", "AlertsService", "$interval", function($scope, $state, $mdDialog, $stateParams, DetailsDeliveryItemService, User, AlertsService, $interval) {
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
					AlertsService.loading();
				}

				DetailsDeliveryItemService.serviceDetails($stateParams.id, function(response) {

					if (model.messengerBool) {
						AlertsService.cancel();
					}

					model.deliveryItemInfo = response.data;
					console.log("EL deliveryItemInfo", model.deliveryItemInfo);
					model.serviceStatus = traslateStatusFunction(response.data["status"]);

					model.pickupDate = new Date(model.deliveryItemInfo["pickup_time"]);
					model.estimated = new Date(model.deliveryItemInfo["estimated"]);
					nowDate = new Date();
					model.leftTime = parseInt((model.estimated.getTime() - nowDate.getTime()) / 60000);
					if (model.leftTime < 0) {
						model.leftTime = "Retrasado";
					}

					if (response.data.messenger_info) {
						model.messenger_info1=response.data.messenger_info;
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
					} else {
						model.serviceStatus = traslateStatusFunction(response.data["status"]);
					}
				});
			}

			model.serviceDetails();

			model.cancelService = function() {
				var confirm = $mdDialog.confirm()
					.title('Alerta')
					.content('Deseas cancelar el servicio.')
					.ariaLabel('')
					.ok('Cancelar Servicio')
					.cancel('Volver');

				$mdDialog.show(confirm).then(function() {
					//AlertsService.loading();
					model.abortService = function() {
						model.messenger_info1.abort_reason="Cancelado por el admin";
						console.log(model.deliveryItemInfo);
						DetailsDeliveryItemService.abortService(model.deliveryItemInfo._id, model.messenger_info1, function(response) {

							console.log(response);
							if (response.response) {
								model.serviceDetails();
								//AlertsService.cancel();
								//AlertsService.showAlert("El servicio fue eliminado correctamente", "goProfile");
							} else {
								//.showAlert(response.msg, "");
							}
						});
					};
					model.abortService();
				});
			};



			model.searchMessenger = function() {
				DetailsDeliveryItemService.getMessengerEmail(model.emailSearchMessenger, function(response) {
					model.messenger_info = response.data;
					console.log(model.messenger_info);
					if (response.response) {
						AlertsService.showAlert("El mensajero fue encontrado", "");
						model.reload();
					} else {
						AlertsService.showAlert(response.msg, "");
					}
				});
			};

			model.assingMessenger = function() {
				//idItem, messenger_info
				DetailsDeliveryItemService.assingMessenger(model.deliveryItemInfo._id, model.messenger_info, function(response) {

					console.log(response);
					if (response.response) {
						AlertsService.showAlert("El mensajero fue encontrado", "");
						model.reload();
					} else {
						AlertsService.showAlert(response.msg, "");
					}
				});
			};

			model.removeMessenger = function() {
				//idItem, status,messenger_info
				console.log("ID PEDIDO",model.deliveryItemInfo._id);
				console.log("ID USER",model.deliveryItemInfo.user_id);

				DetailsDeliveryItemService.changeStatus(model.deliveryItemInfo._id, "available", model.deliveryItemInfo.messenger_info, function(response) {

					console.log(response);
					if (response.response) {
						//AlertsService.showAlert("El estado fue cambiado exitosamente", "");
						model.reload();
					} else {
						AlertsService.showAlert(response.msg, "");
					}
				});
			};

			model.changeStatus = function() {
				//idItem, status,messenger_info
				DetailsDeliveryItemService.changeStatus(model.deliveryItemInfo._id, model.newState, model.deliveryItemInfo.messenger_info, function(response) {

					console.log(response);
					if (response.response) {
						//AlertsService.showAlert("El estado fue cambiado exitosamente", "");
						model.reload();
					} else {
						AlertsService.showAlert(response.msg, "");
					}
				});
			};



			model.showBigImage = function(url) {
				console.log('url', url);
				model.currentUrl = url;

				$mdDialog.show({
						controller: 'DialogController',
						templateUrl: 'serviceDetails/showBigImage.tpl.html',
						resolve: {
							'imageUrl': function() {
								console.log('url', url);
								return url;
							}
						}

					})
					.then(function(answer) {


					});
			};


			model.reload = function() {
				//$state.reload();
				model.serviceDetails();
			};
		}
	}]);

	module.controller('DialogController', ['$scope', 'imageUrl', function($scope, imageUrl) {
		$scope.currentUrl = imageUrl;
	}]);

}(angular.module("appMensajeria.serviceDetails")));


function traslateStatusFunction(status) {
	var traslateStatus = "";
	if (status == "available") {
		traslateStatus = "Disponible";
	} else
	if (status == "accepted") {
		traslateStatus = "Aceptado";
	} else
	if (status == "in-transit") {
		traslateStatus = "En tránsito";
	} else
	if (status == "returning") {
		traslateStatus = "Volviendo";
	} else
	if (status == "returned") {
		traslateStatus = "Finalizado";
	} else
	if (status == "delivered") {
		traslateStatus = "Finalizado";

	} else
	if (status == "aborted") {
		traslateStatus = "Abortado";

	}
	return traslateStatus;
}