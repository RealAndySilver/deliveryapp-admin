(function(module) {

    module.service('ServicesService', ['ServerComunicator', function(ServerComunicator) {
        var model = this;

        init();

        function init() {
            model.listByType = function(type,sort,callback){
                var listPromise  = ServerComunicator.getServicesByType(type,sort);
                listPromise.then(function(response){
                    /*console.log(response);*/
                    callback({
                        response: response.data.status,
                        msg: response.data.message || response.data.error,
                        data: response.data.response,
                        total: response.data.total
                    });
                },function(error){
                    /*console.error("error",error);*/
                    callback({
                        response: false,
                        msg: 'Ocurrio un error por favor intente más tarde o compruebe su conexión a internet',
                        error: error
                    });
                });
            };
        }

    }]);

}(angular.module("appMensajeria.services")));