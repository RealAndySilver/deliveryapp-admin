(function (module) {

    module.service('ServerComunicator', ['$http', function ($http) {
            var model = this;

            /*DEV IAMSTUDIO*/
            // var endpoint = "http://192.241.187.135:8080/api_1.0/";
            /*VUELTAP PROD
            var endpoint = "http://localhost:8080/api_1.0/";
            /*VUELTAP PROD*/
            var endpoint = "https://vueltap.com:8080/api_1.0/";

            var SORT_LIMIT = 10;

            init();

            function init() {
                function getHeader() {
                    var email = sessionStorage.getItem('email');
                    var pass = sessionStorage.getItem('pass');
                    var token = sessionStorage.token;
                    return {
                        type: 'admin'
                    };
                }

                model.login = function (email, password) {
                    return $http({
                        method: 'PUT',
                        data: {
                            email: email,
                            password: password
                        },
                        url: endpoint + 'User' + '/Login'
                    });
                };

                model.register = function (name, lastname, email, password, mobilephone) {
                    return $http({
                        method: 'POST',
                        data: {
                            name: name,
                            lastname: lastname,
                            email: email,
                            password: password,
                            mobilephone: mobilephone
                        },
                        headers: getHeader(),
                        url: endpoint + 'User' + '/Create'
                    });
                };

                model.recoverPassword = function (email) {
                    return $http({
                        method: 'GET',
                        data: email,
                        url: endpoint + 'User' + '/Recover/' + email
                    });
                };

                model.changePass = function (password, token) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "password": password
                        },
                        headers: getHeader(),
                        url: endpoint + 'User' + '/NewPassword/' + token
                    });
                };

                model.requestMessenger = function (delivery) {
                    return $http({
                        method: 'POST',
                        data: delivery,
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem' + '/Create'
                    });
                };

                model.getPrice = function (loc1, loc2) {
                    return $http({
                        method: 'GET',
                        data: {
                            loc1: loc1,
                            loc2: loc2
                        },
                        headers: getHeader(),
                        url: endpoint + 'GetPrice' + "/" + loc1 + "/" + loc2
                    });
                };

                model.getDeliveryItemDetails = function (id) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem' + "/" + id
                    });
                };

                model.deleteDeliveryItem = function (idItem, idUser) {
                    return $http({
                        method: 'DELETE',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/Delete' + "/" + idItem + "/" + idUser
                    });
                };

                model.restartDeliveryItem = function (idItem, idUser) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "user_id": idUser
                        },
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/Restart' + "/" + idItem
                    });
                };

                model.updateProfile = function (idUser, name, lastname, mobilephone) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "name": name,
                            "lastname": lastname,
                            "mobilephone": mobilephone
                        },
                        headers: getHeader(),
                        url: endpoint + 'User/Update' + "/" + idUser
                    });
                };

                model.changePassword = function (idUser, oldPass, newPass) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "password": oldPass,
                            "new_password": newPass
                        },
                        headers: getHeader(),
                        url: endpoint + 'User/Password' + "/" + idUser
                    });
                };



                model.ratingMessenger = function (idItem, idUser, numberStars, review) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "user_id": idUser,
                            "rating": numberStars,
                            "review": review
                        },
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/Rate' + "/" + idItem
                    });
                };

                //SERVICES DEL DASH BOARD

                model.getUsers = function (skip) {
                    var limit = SORT_LIMIT;
                    skip = skip * limit;
                    var sort = {
                        'skip': skip,
                        'limit': limit
                    };
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Users/' + JSON.stringify(sort)
                    });
                };


                model.getAllUsers = function (skip) {

                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Users',
                    });
                };

                model.getUser = function (idUser) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'User' + "/" + idUser,
                    });
                };

                model.getUserEmail = function (emailUser) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'User/Email' + "/" + emailUser,
                    });
                };

                model.deleteUser = function (idUser) {
                    return $http({
                        method: 'DELETE',
                        headers: getHeader(),
                        url: endpoint + 'User' + "/" + idUser,
                    });
                };



                model.getActiveDeliveryItems = function (idUser) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/UserActive' + "/" + idUser,
                    });
                };

                model.getServicesByType = function(type,sort){
                    return $http({
                        method : 'GET',
                        headers : getHeader(),
                        url : ( sort ?
                            endpoint + 'DeliveryItems/Status/'+type+"/"+sort :
                            endpoint + 'DeliveryItems/Status/'+type
                        )
                    });
                };

                model.getCompletedDeliveryItems = function (idUser) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'User/FinishedDeliveries' + "/" + idUser,
                    });
                };

                model.getAbortedDeliveryItems = function (idUser) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/UserAborted' + "/" + idUser,
                    });
                };

                model.getMessengers = function (skip) {
                    //skip: Number, limit: Number
                    var limit = SORT_LIMIT;
                    skip = skip * limit;
                    var sort = {
                        'skip': skip,
                        'limit': limit
                    };
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Messengers/' + JSON.stringify(sort),
                    });
                };
                
                model.getAllMessengers = function () {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Messengers',
                    });
                };

                model.getMessenger = function (idMessenger) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Messenger' + "/" + idMessenger,
                    });
                };

                model.getMessengerEmail = function (emailMessenger) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Messenger' + "/" + "Email" + "/" + emailMessenger,
                    });

                };

                model.deleteMessenger = function (idMessenger) {
                    return $http({
                        method: 'DELETE',
                        headers: getHeader(),
                        url: endpoint + 'Messenger' + "/" + idMessenger,
                    });
                };

                model.updateMessengerProfile = function (idMessenger, name, lastname, mobilephone, plate) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "name": name,
                            "lastname": lastname,
                            "mobilephone": mobilephone,
                            "plate": plate,
                        },
                        headers: getHeader(),
                        url: endpoint + 'Messenger/Update' + "/" + idMessenger,
                    });
                };

                model.getServiceByOverallStatus = function (overall_status, idMessenger) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItems/OverallStatus' + "/" + overall_status + "/" + idMessenger,
                    });
                };

                model.getLastWeekReportInfo = function (idMessenger) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItems/Messenger/LastWeek/'+ idMessenger,
                    });
                };

                model.getLastFortnightInfo = function (idUser) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItems/User/LastFortnight/'+ idUser,
                    });
                };

                model.assingMessenger = function (idItem, messenger_info) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "messenger_info": messenger_info,
                        },
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/NextStatus' + "/" + idItem,
                    });
                };

                model.changeStatus = function (idItem, status, messenger_info) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "messenger_info": messenger_info,
                        },
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/ChangeStatus/Status/' + status + "/" + idItem,
                    });
                };

                model.getAllDeliveryItemByStatus = function (status, skip) {

                    var limit = SORT_LIMIT;
                    skip = skip * limit;
                    var sort = {
                        'skip': skip,
                        'limit': limit
                    };
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItems/' + status + "/" + JSON.stringify(sort),
                    });
                };

                model.abortService = function (idItem, messenger_info) {
                    return $http({
                        method: 'PUT',
                        data: {
                            "messenger_info": messenger_info,
                        },
                        headers: getHeader(),
                        url: endpoint + 'DeliveryItem/Abort' + "/" + idItem,
                    });
                };

                model.getStatistics = function (status) {
                    return $http({
                        method: 'GET',
                        headers: getHeader(),
                        url: endpoint + 'Count/DeliveryItems/' + status,
                    });
                };

                model.activateMessenger = function (idMessenger) {
                    return $http({
                        method: 'PUT',
                        headers: getHeader(),
                        url: endpoint + 'Admin/ActivateMessenger/' + idMessenger,
                    });
                };

                model.deactivateMessenger = function (idMessenger) {
                    return $http({
                        method: 'PUT',
                        headers: getHeader(),
                        url: endpoint + 'Admin/DeactivateMessenger/' + idMessenger,
                    });
                };

                //DeliveryItem/ChangeStatus/Status/:status/:delivery_id



            }
        }]);

}(angular.module("appMensajeria.serverComunicator", [])));