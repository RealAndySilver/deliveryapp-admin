(function(module) {

	module.controller('MessengerDetailsController', ["$state", "$stateParams", "MessengerDetailsService", "AlertsService", "$location", "$anchorScroll","$scope", function($state, $stateParams, MessengerDetailsService, AlertsService, $location, $anchorScroll,$scope) {
		var model = this;
		model.acceptedServicesBool = false;
		model.completedServicesBool = false;

		init();

		function init() {



			model.getMessenger = function() {
				console.log("ENTRO A DETALLES", $stateParams.id);
				AlertsService.loading();
				MessengerDetailsService.getMessenger($stateParams.id, function(response) {
					model.Messenger = response.data;
                    if(!model.Messenger.admin_confirmation){
                        model.Messenger.admin_confirmation = false;
                    }
					console.log(model.Messenger);
					AlertsService.cancel();
					if (!response.data) {
						AlertsService.showAlert(response.msg, "");
					} else if (model.Messenger.length === 0) {
						//AlertsService.showAlert("No tienes servicios Activos en este momento", "");
					}
				});
			};
			model.getMessenger();

            model.updateStatus = function () {

                var service = model.Messenger.admin_confirmation === true ? MessengerDetailsService.activateMessenger :
                    MessengerDetailsService.deactivateMessenger;

                AlertsService.loading();
                service(model.Messenger["_id"], function (response) {
                    AlertsService.cancel();

                    if (response.response) {
                        AlertsService.showAlert("Datos actualizados correctamente", "");
                    } else {
                        AlertsService.showAlert(response.msg, "");
						model.Messenger.admin_confirmation = !model.Messenger.admin_confirmation;
                    }
                });
            };

			model.updateMessengerProfile = function() {

				if ($scope.profileForm.$valid) {
					AlertsService.loading();
					//idMessenger, name, lastname, mobilephone,plate
					MessengerDetailsService.updateMessengerProfile(model.Messenger["_id"], model.Messenger.name, model.Messenger.lastname, model.Messenger.mobilephone, model.Messenger.plate, function(response) {
						console.log(response);
						AlertsService.cancel();
						///
						if (response.response) {
							AlertsService.showAlert("Datos actualizados correctamente", "");
						} else {
							AlertsService.showAlert(response.msg, "");
						}
					});

				} else {
					AlertsService.showSimpleAlert("Completa todos los campos por favor");
				}



			};

			model.getStartedServices = function() {

				MessengerDetailsService.getServiceByOverallStatus("started", $stateParams.id, function(response) {
					model.startedServices = response.data;
				});
				console.log("ENTRO A GETACTIVESERVICES", model.startedServices);
			};
			model.getStartedServices();


			model.getFinishedServices = function() {

				MessengerDetailsService.getServiceByOverallStatus("finished", $stateParams.id, function(response) {
					model.finishedServices = response.data;
				});
			};
			model.getFinishedServices();



			model.goToServiceDetails = function(idObject) {
				$state.go('serviceDetails', {
					id: idObject
				});
			};

			model.traslateStatusFunction = function(status) {
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
			};

			model.turnAcceptedBool = function() {
				var id = setInterval(function() {
					$location.hash('startedServices');

					// call $anchorScroll()
					$anchorScroll();

					clearInterval(id);
				}, 100);
				if (model.acceptedServicesBool === false) {
					model.acceptedServicesBool = true;
				} else {
					model.acceptedServicesBool = false;
				}
			};
			model.turnCompletedBool = function() {
				var id = setInterval(function() {
					$location.hash('completedServices');

					// call $anchorScroll()
					$anchorScroll();

					clearInterval(id);
				}, 100);

				if (model.completedServicesBool === false) {
					model.completedServicesBool = true;

				} else {
					model.completedServicesBool = false;
				}
			};

		}


	}]);

}(angular.module("appMensajeria.messengerDetails")));