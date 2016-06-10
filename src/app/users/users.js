(function (module) {

    module.controller('UsersController', ["RequestMessengerService", "GetUsersService", "AlertsService", "$state", "$scope",
        function (RequestMessengerService, GetUsersService, AlertsService, $state, $scope) {
            var model = this;

            model.pagingInfo={currentPage:1,pageSize:10,totalRecords:0};
            model.users = [];

            model.getUsers = function (pageSelected) {
                var recordsToSkip=(pageSelected-1);
                GetUsersService.getUsers(recordsToSkip, function (response) {
                    model.users = response.data;
                    updatePagingInfo(pageSelected,response.total);
                });
            };

            model.goToUserDetails = function (idUser) {
                $state.go('userDetails', {
                    id: idUser
                });

            };

            model.deleteUser = function (idUser) {
                GetUsersService.deleteUser(idUser, function (response) {
                    console.log(response);

                    if (!response.data) {
                        $scope.BootstrapModal.show(response.msg, "Confirmación de eliminación");
                        $state.go($state.current,{},{ reload:true });
                    } else if (model.users.length === 0) {
                        $scope.BootstrapModal.show("No tienes Servicios Activos en este momento", "");
                    }
                });
            };


            model.searchUser = function () {
                RequestMessengerService.getUserEmail(model.emailSearchUser, function (response) {
                    model.userInformation = response.data;
                    //console.log(response);
                    //console.log(response.error);
                    if (response.response) {
                        model.errorSearch = '';
                    }else if(response.msg  == 'not found'){
                        model.errorSearch = 'Usuario no encontrado';
                    }
                });
            };

            var updatePagingInfo=function(currPage,totRecords){
                model.pagingInfo.currentPage=currPage;
                model.pagingInfo.totalRecords=totRecords;
            };


            function init() {
                model.getUsers(model.pagingInfo.currentPage);
            }

            init();
        }]);

}(angular.module("appMensajeria.users")));