(function(module) {

	module.controller('UserDetailsController', ["$state", "$stateParams", "UserDetailsService", "AlertsService","$scope", "$location","$anchorScroll",function($state, $stateParams, UserDetailsService, AlertsService,$scope,$location,$anchorScroll) {
		var model = this;
		model.availableServicesBool = false;
		model.acceptedServicesBool = false;
		model.completedServicesBool = false;
		model.abortedServicesBool = false;


		init();

		function init() {

			model.getUser = function() {
				/*console.log("ENTRO A DETALLES", $stateParams.id);*/
				/*AlertsService.loading();*/
                $scope.BootstrapLoading.show(true);
				UserDetailsService.getUser($stateParams.id, function(response) {
					model.User = response.data;
                    $scope.BootstrapLoading.show(false);
					/*console.log(model.User);*/
					/*AlertsService.cancel();*/
					if (!response.data) {
						/*AlertsService.showAlert(response.msg, "");*/
                        $scope.BootstrapLoading.show(response.msg, "");
					} else if (model.User.length === 0) {
						/*AlertsService.showAlert("No tienes servicios Activos en este momento", "");*/
                        $scope.BootstrapLoading.show("No tienes Servicios Activos en este momento", "");
					}
				});
			};
			model.getUser();


			model.updateProfile = function() {
				if ($scope.profileForm.$valid) {
					/*AlertsService.loading();*/
                    $scope.BootstrapLoading.show(true);
					UserDetailsService.updateProfile(model.User["_id"], model.User.name, model.User.lastname, model.User.mobilephone, function(response) {
                        $scope.BootstrapLoading.show(false);
						/*AlertsService.cancel();*/
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

			model.getActiveServices = function() {
				UserDetailsService.getActiveServices($stateParams.id, function(response) {
					model.activeServices = response.data;
				});
			};
			model.getActiveServices();


			model.getAbortedServices = function() {
				UserDetailsService.getAbortedServices($stateParams.id, function(response) {
					model.abortedServices = response.data;
				});
			};
			model.getAbortedServices();


			model.getCompletedServices = function() {
				UserDetailsService.getCompletedServices($stateParams.id, function(response) {
					model.completedServices = response.data;
				});
			};
			model.getCompletedServices();

			model.turnAvailableBool = function() {
				var id = setInterval(function() {
					$location.hash('availableServices');

					// call $anchorScroll()
					$anchorScroll();

					clearInterval(id);
				}, 100);
				if (model.availableServicesBool === false) {
					model.availableServicesBool = true;
				} else {
					model.availableServicesBool = false;
				}
			};

			model.turnAcceptedBool = function() {
				var id = setInterval(function() {
					$location.hash('acceptedServices');

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

			model.turnAbortedBool = function() {
				var id = setInterval(function() {
					$location.hash('abortedServices');

					// call $anchorScroll()
					$anchorScroll();

					clearInterval(id);
				}, 100);
				if (model.abortedServicesBool === false) {
					model.abortedServicesBool = true;
				} else {
					model.abortedServicesBool = false;
				}
			};

			model.goToServiceDetails = function(idObject) {
				$state.go('serviceDetails', {
					id: idObject
				});
			};


			model.verifyAvailableservices = function() {
				var availableServices = {};
				var boolea = false;
				var i = 0;
                if(model.activeServices) {
                    for (i; i < model.activeServices.length; i++) {
                        if (model.activeServices[i].status === "available") {
                            availableServices.p = model.activeServices[i];
                            break;
                        }
                    }

                    if (availableServices.p) {
                        boolea = true;
                    } else {
                        boolea = false;
                    }

                    return boolea;
                }
			};
			model.verifyAceptedservices = function() {
				var acceptedServices = {};
				var boolea = false;
				var i = 0;
                if(model.activeServices){
                    for (i; i < model.activeServices.length; i++) {
                        if (model.activeServices[i].status !== "available") {
                            acceptedServices.p = model.activeServices[i];
                            break;
                        }
                    }

                    if (acceptedServices.p) {
                        boolea = true;
                    } else {
                        boolea = false;
                    }

                    return boolea;
                }
			};



		}



	}]);

}(angular.module("appMensajeria.userDetails")));