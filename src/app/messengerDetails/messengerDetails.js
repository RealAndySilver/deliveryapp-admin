(function(module) {

	module.controller('MessengerDetailsController', ["$state", "$stateParams", "MessengerDetailsService", "AlertsService", "$location", "$anchorScroll","$scope", function($state, $stateParams, MessengerDetailsService, AlertsService, $location, $anchorScroll,$scope) {
		var model = this;
		model.acceptedServicesBool = false;
		model.completedServicesBool = false;
        model.finishLoading = false;

		init();

		function init() {



			model.getMessenger = function() {
				/*AlertsService.loading();*/
                $scope.BootstrapLoading.show(true);
				MessengerDetailsService.getMessenger($stateParams.id, function(response) {
                    $scope.BootstrapLoading.show(false);
					model.Messenger = response.data;
                    if(!model.Messenger.admin_confirmation){
                        model.Messenger.admin_confirmation = false;
                    }
					/*AlertsService.cancel();*/
					if (!response.data) {
						/*AlertsService.showAlert(response.msg, "");*/
                        $scope.BootstrapLoading.show(response.msg, "");
					} else if (model.Messenger.length === 0) {
						/*AlertsService.showAlert("No tienes servicios Activos en este momento", "");*/
                        $scope.BootstrapLoading.show("No tienes servicios Activos en este momento", "");
					}
                    model.finishLoading = true;
				});
			};
			model.getMessenger();

            model.updateStatus = function () {

                var service = model.Messenger.admin_confirmation === false ? MessengerDetailsService.activateMessenger :
                    MessengerDetailsService.deactivateMessenger;

                /*AlertsService.loading();*/

                $scope.BootstrapLoading.show(true);
                service(model.Messenger["_id"], function (response) {
                    /*AlertsService.cancel();*/
                    $scope.BootstrapLoading.show(false);
                    if (response.response) {
                        /*AlertsService.showAlert("Datos actualizados correctamente", "");*/
                        $scope.BootstrapLoading.show("Datos actualizados correctamente", "");
                    } else {
                        /*AlertsService.showAlert(response.msg, "");*/
                        $scope.BootstrapLoading.show(response.msg, "");
						model.Messenger.admin_confirmation = !model.Messenger.admin_confirmation;
                    }
                });
            };

			model.updateMessengerProfile = function() {

				if ($scope.profileForm.$valid) {
					/*AlertsService.loading();*/
                    $scope.BootstrapLoading.show(true);
					//idMessenger, name, lastname, mobilephone,plate
					MessengerDetailsService.updateMessengerProfile(model.Messenger["_id"], model.Messenger.name, model.Messenger.lastname, model.Messenger.mobilephone, model.Messenger.plate, function(response) {

                        $scope.BootstrapLoading.show(false);
						/*AlertsService.cancel();*/
						///
						if (response.response) {
							/*AlertsService.showAlert("Datos actualizados correctamente", "");*/
                            $scope.BootstrapLoading.show("Datos actualizados correctamente", "");
						} else {
							/*AlertsService.showAlert(response.msg, "");*/
                            $scope.BootstrapLoading.show(response.msg, "");
						}
					});

				} else {
					/*AlertsService.showSimpleAlert("Completa todos los campos por favor");*/
                    $scope.BootstrapLoading.show("Completa todos los campos por favor");
				}



			};

			model.getStartedServices = function() {

				MessengerDetailsService.getServiceByOverallStatus("started", $stateParams.id, function(response) {
					model.startedServices = response.data;
				});
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