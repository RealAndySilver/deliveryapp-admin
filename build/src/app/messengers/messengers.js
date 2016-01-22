(function(module) {

	module.controller('MessengersController', ["DetailsDeliveryItemService","GetMessengersService", "AlertsService", "$state", function(DetailsDeliveryItemService,GetMessengersService, AlertsService, $state) {
		var model = this;
		var counter=0;
		model.showMoreBool=true;
		model.messengers=[];
		model.wasFoundBool=true;

		init();
		//arr= arr.concat(arr2)
		function init() {


			model.getMessengers = function() {
				AlertsService.loading();
				GetMessengersService.getMessengers(counter,function(response) {
					model.messengers = model.messengers.concat(response.data);
					console.log(model.messengers.length);
					if(response.data.length===0){
						model.showMoreBool=false;
					}

					console.log(response);
					AlertsService.cancel();
					if(response.response){
						counter++;
					}
					if (!response.data) {
						AlertsService.showAlert(response.msg, "");
					} else if (model.messengers.length === 0) {
						AlertsService.showAlert("No se encuentran usuarios registrados en este momento.", "");
					}
				});
			};
			model.getMessengers();

			model.goToMessengerDetails = function(idMessenger) {
				$state.go('messengerDetails', {
					id: idMessenger
				});

			};

			model.deleteMessenger = function(idMessenger) {
				console.log("ID USER", idMessenger);
				AlertsService.loading();
				GetMessengersService.deleteMessenger(idMessenger, function(response) {
					console.log(response);
					AlertsService.cancel();
					if (!response.data) {
						AlertsService.showAlert(response.msg, "");
					} else if (model.users.length === 0) {
						AlertsService.showAlert("No tienes servicios Activos en este momento", "");
					}
				});
			};

			model.searchMessenger = function() {
				DetailsDeliveryItemService.getMessengerEmail(model.emailSearchMessenger, function(response) {
					model.messenger_info = response.data;
					console.log(model.messenger_info);
					if (response.response) {
						//AlertsService.showAlert("El mensajero fue encontrado", "");
						model.wasFoundBool=true;
						
					} else {
						model.wasFoundBool=false;
						//AlertsService.showAlert(response.msg, "");
					}
				});
			};

		}
	}]);

}(angular.module("appMensajeria.messengers")));