(function(module) {

	module.service('GetAllAddressService', ['PickupAddresses', 'DeliveryAddresses', function(PickupAddresses, DeliveryAddresses) {
		var model = this;

		var MAX_ADDRESS = 3;
		console.log("EL VALUE DE LAS DIRECCIONES", PickupAddresses);

		model.save = function(pickupItem, deliveryItem) {

			if (PickupAddresses.length === 0) {
				PickupAddresses = JSON.parse(localStorage.getItem('PickupAddresses'));
				DeliveryAddresses = JSON.parse(localStorage.getItem('DeliveryAddresses'));

				if (PickupAddresses === null) {
					PickupAddresses = [];
					DeliveryAddresses = [];
				}
			}
			console.log("EL VALUE DE LAS DIRECCIONES DESPUES", PickupAddresses);
			console.log("TAMAÑO DE LOS ARRAYS", PickupAddresses.length);

			PickupAddresses.splice(0, 0, pickupItem);
			DeliveryAddresses.splice(0, 0, deliveryItem);

			if (PickupAddresses.length > MAX_ADDRESS) {
				PickupAddresses.pop();
				DeliveryAddresses.pop();
			}

			localStorage.setItem('PickupAddresses', JSON.stringify(PickupAddresses));
			localStorage.setItem('DeliveryAddresses', JSON.stringify(DeliveryAddresses));

			console.log('DIRECCIONEs recogida ', PickupAddresses);
			console.log('DIRECCIONES entrega ', DeliveryAddresses);
		};


	}]);

	module.controller('RequestMessengerController', ['$scope', '$mdDialog', 'RequestMessengerService', 'Session', 'GetPrice', '$stateParams', '$state', 'PickupAddresses', 'DeliveryAddresses', 'GetAllAddressService', "AlertsService", function($scope, $mdDialog, RequestMessengerService, Session, GetPrice, $stateParams, $state, PickupAddresses, DeliveryAddresses, GetAllAddressService, AlertsService) {
		var model = this;

		model.pickUpAddressSave = JSON.parse(localStorage.getItem('PickupAddresses'));
		model.deliveryAddressSave = JSON.parse(localStorage.getItem('DeliveryAddresses'));

		console.log("LO GUARDARDO EN EL LOCAL", model.pickUpAddressSave);

		init();

		model.pickup = {};
		model.delivery = {};

		function init() {

			model.roundtrip = false;

			$scope.showAlert = function() {
				$mdDialog.show(
					$mdDialog.alert()
					.content('Recuerda activar el permiso para utilizar tu ubicación en la barra superior.')
					.ariaLabel('Allow user geolocation')
					.ok('Aceptar')
					.disableParentScroll(false)
				);
			};
			$scope.showAlert();

			$scope.pickupLat = 0;
			$scope.pickupLon = 0;

			$scope.deliverLat = 0;
			$scope.deliverLon = 0;

			$scope.delivery_address = '';

			function assignToPickupAddress(value) {
				$scope.pickup_address = value;
			}

			function assignToDeliveryAddress(value) {
				$scope.delivery_address = value;
			}

			function geocodeDelivery() {
				var geocoder = new google.maps.Geocoder();
				var latlng = "";
				var fieldToPutData;
				if ($scope.valueBool) {
					latlng = new google.maps.LatLng($scope.pickupLat, $scope.pickupLon);
					fieldToPutData = assignToPickupAddress;
				} else {
					latlng = new google.maps.LatLng($scope.deliverLat, $scope.deliverLon);
					fieldToPutData = assignToDeliveryAddress;
				}


				geocoder.geocode({
					'latLng': latlng
				}, function(results, status) {
					//console.log('results', results);
					if (status == google.maps.GeocoderStatus.OK) {
						if (results[0]) {
							var res = results[0].formatted_address.split(" a ", 1);
							fieldToPutData(res[0]);
							//$scope.delivery_address = res[0];
						} else {
							fieldToPutData('Location not found');
							//$scope.delivery_address = 'Location not found';
						}
					} else {
						fieldToPutData('Geocoder failed due to: ' + status);
						//$scope.delivery_address = 'Geocoder failed due to: ' + status;
					}
				});
			}

			$scope.setLatLong = function(lat1, lon1, lat2, lon2, valueBool) {
				$scope.$apply(function() {
					$scope.pickupLat = parseFloat(lat1);
					$scope.pickupLon = parseFloat(lon1);
					$scope.deliverLat = parseFloat(lat2);
					$scope.deliverLon = parseFloat(lon2);
					$scope.valueBool = valueBool;
					console.log("VALOR DEL BOOL", $scope.valueBool);

					geocodeDelivery();
				});
				getDistance($scope.pickupLat, $scope.pickupLon, $scope.deliverLat, $scope.deliverLon);
			};

			function getDistance(pickupLat, pickupLon, destinationLat, destinationLon) {
				console.log('entra a esta función');
				var loc1 = '';
				var loc2 = '';
				if (destinationLat !== 0) {
					loc1 = pickupLat + "," + pickupLon;
					loc2 = destinationLat + "," + destinationLon;
					GetPrice.getPrice(loc1, loc2, function(response) {
						if (response.response) {
							$scope.currency = true;
							$scope.deliveryPrice = response.data;
						}
						/*else {
							$scope.currency = false;
							$scope.deliveryPrice = response.msg;
						}*/
						console.log(response);
					});
				} else {
					console.log('no estan todos los parámetros requeridos');
				}
			}

			var pickupItem = {};
			var deliveryItem = {};
			model.requestMessenger = function() {

				if ($scope.requestMessengerForm.$valid) {

					model.delivery.pickup_object = {};
					model.delivery.pickup_object.address = $scope.pickup_address;
					model.delivery.pickup_object.lat = $scope.pickupLat;
					model.delivery.pickup_object.lon = $scope.pickupLon;

					model.delivery.delivery_object = {};
					model.delivery.delivery_object.address = $scope.delivery_address;
					model.delivery.delivery_object.lat = $scope.deliverLat;
					model.delivery.delivery_object.lon = $scope.deliverLon;

					model.delivery.roundtrip = model.roundtrip;

					model.delivery.price_to_pay = $scope.deliveryPrice;
					model.delivery.user_info = model.userInformation;
					model.delivery.user_id = model.userInformation._id;
					console.log('objeto servicio ', model.delivery);

					AlertsService.loading();
					RequestMessengerService.requestMessenger(model.delivery, function(response) {
						console.log(response);
						AlertsService.cancel();
						var pickupItem = response.data.pickup_object;
						var deliveryItem = response.data.delivery_object;
						if (response.response) {

							GetAllAddressService.save(pickupItem, deliveryItem);

							$state.go('serviceDetails', {
								id: response.data._id
							});
						} else {
							AlertsService.showAlert(response.msg, "");
						}

					});
				} else {
					AlertsService.showSimpleAlert("Completa todos los campos por favor");
				}

			};

			model.searchUser = function() {
				RequestMessengerService.getUserEmail(model.emailSearchUser, function(response) {
					model.userInformation = response.data;
					console.log(model.userInformation);
					if (response.response) {
						AlertsService.showAlert("El usuario fue encontrado", "");
						
					} else {
						AlertsService.showAlert(response.msg, "");
					}
				});
			};

			model.showAddressBool = false;

			model.isShowing = function() {
				console.log("ISHOWING", model.showAddressBool);
				if (model.showAddressBool) {
					model.showAddressBool = false;
				} else {
					model.showAddressBool = true;
				}
			};

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};
				$scope.cancel = function() {
					$mdDialog.cancel();
				};
				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}

			$scope.useAddress = function(delivery) {
				$mdDialog.show({
						controller: DialogController,
						templateUrl: 'requestMessenger/customDialogUseAddress.tpl.html',

					})
					.then(function(answer) {

						//AQUI SE METE LA LOGICA DE LO QUE QUIERO HACER
						if (answer === "pickup") {
							$scope.pickupLat = delivery["lat"];
							$scope.pickupLon = delivery["lon"];

							model.pickup = {
								lat: delivery['lat'],
								lng: delivery['lon']
							};
							$scope.valueBool = true;
							console.log("ENTRO ");
							geocodeDelivery();
						} else if (answer === "delivery") {

							$scope.deliverLat = delivery["lat"];
							$scope.deliverLon = delivery["lon"];

							model.delivery = {
								lat: delivery['lat'],
								lng: delivery['lon']
							};
							$scope.valueBool = false;
							console.log("ENTRO ");
							geocodeDelivery();
						}

					});

			};
		}


	}]);

}(angular.module("appMensajeria.requestMessenger")));