(function(module) {

	module.controller('ProfileController', ["Session", 'ProfileService', "$state", 'AlertsService', "$scope", function(Session, ProfileService, $state, AlertsService, $scope) {
		var model = this;

		var statusArray = ["", "available", "accepted", "in-transit", "delivered", "returning", "returned"];
		model.users = 0;
		model.messengers = 0;
		model.allServices = 0;
		model.available = 0;
		model.accepted = 0;
		model.inTransit = 0;
		model.delivered = 0;
		model.returning = 0;
		model.returned = 0;

		init();
		model.reload=function(){
			init();
		};

		function init() {


			model.getAllUsers = function() {
                
				ProfileService.getAllUsers( function(response) {
                    
					console.log(response.data);
					model.users=response.data.length;

				});

			};
			model.getAllUsers();
			model.getAllMessengers = function() {

				ProfileService.getAllMessengers(function(response) {
					console.log(response.data);
					model.messengers=response.data.length;

				});

			};
			model.getAllMessengers();

			model.getStatistics = function(status) {

				ProfileService.getStatistics(status, function(response) {
					console.log(response.data);
					

					if (status === "") {
						model.allServices = response.data;
					} else if (status === "available") {
						model.available = response.data;
					} else if (status === "accepted") {
						model.accepted = response.data;
					} else if (status === "in-transit") {
						model.inTransit = response.data;
					} else if (status === "delivered") {
						model.delivered = response.data;
					} else if (status === "returning") {
						model.returning = response.data;
					} else if (status === "returned") {
						model.returned = response.data;
					} 

				});

			};

			for (var i = 0; i < statusArray.length; i++) {
				model.getStatistics(statusArray[i]);
			}


		}
	}]);

}(angular.module("appMensajeria.profile")));