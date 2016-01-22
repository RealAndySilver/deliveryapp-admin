angular.module('templates-app', ['abortedServices/abortedServices.tpl.html', 'about/about.tpl.html', 'activeServices/activeServices.tpl.html', 'changePassword/changePassword.tpl.html', 'completedServices/completedServices.tpl.html', 'createUser/createUser.tpl.html', 'home/home.tpl.html', 'loginUser/loginUser.tpl.html', 'loginUser/recoverDialog.tpl.html', 'messengerDetails/messengerDetails.tpl.html', 'messengers/messengers.tpl.html', 'profile/profile.tpl.html', 'ratingMessenger/ratingMessenger.tpl.html', 'recoverPassword/changePass.tpl.html', 'recoverPassword/recoverPassword.tpl.html', 'requestMessenger/customDialogUseAddress.tpl.html', 'requestMessenger/requestMessenger.tpl.html', 'requestedServices/requestedServices.tpl.html', 'searchingMessenger/searchingMessenger.tpl.html', 'serviceDetails/serviceDetails.tpl.html', 'serviceDetails/showBigImage.tpl.html', 'termsConditions/termsConditions.tpl.html', 'userDetails/userDetails.tpl.html', 'users/users.tpl.html']);

angular.module("abortedServices/abortedServices.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("abortedServices/abortedServices.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Servicios Abortados</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div >\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.deliveryItems\" ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "				<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "				<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "				<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "				<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "				<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "				<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "			</div>\n" +
    "			</md-card>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("activeServices/activeServices.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("activeServices/activeServices.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Servicios sin Aceptar</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div >\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.activeServices\" ng-show=\"item.status == 'available'\"   ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "			<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.getAllDeliveryItemByStatus()\" ng-show=\"model.showMoreBool\">BUSCAR MAS</md-button>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("changePassword/changePassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("changePassword/changePassword.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"basic-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Cambiar Contraseña</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div>\n" +
    "	    <div>\n" +
    "			<form name=\"changePassForm\" ng-submit=\"model.loginUser()\" novalidate>\n" +
    "				<md-input-container flex>\n" +
    "					<label>Escriba su antigua contraseña</label>\n" +
    "	            	<input type=\"Password\" name=\"oldPass\" ng-model=\"model.oldPass\" required>\n" +
    "	            	\n" +
    "	        	</md-input-container>\n" +
    "	        	<md-input-container flex>\n" +
    "					<label>Ingrese la nueva contraseña</label>\n" +
    "	            	<input type=\"Password\" name=\"newPass\" ng-model=\"model.newPass\" required>\n" +
    "	            	\n" +
    "	        	</md-input-container>\n" +
    "	        	<md-input-container flex>\n" +
    "					<label>Repita la nueva contraseña</label>\n" +
    "	            	<input type=\"password\" name=\"repeatNewPassword\" ng-model=\"model.repeatNewPass\" required>\n" +
    "	            	\n" +
    "	        	</md-input-container>\n" +
    "	        	\n" +
    "	        	<md-input-container flex>\n" +
    "	        		<md-button class=\"md-raised primary-btn\" ng-click=\"model.changePass()\" >Cambiar</md-button>\n" +
    "	        	</md-input-container>\n" +
    "			</form>\n" +
    "	    </div>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("completedServices/completedServices.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("completedServices/completedServices.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Servicios Completados</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div >\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.deliveryItems\" ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "			<div id=\"containerInfo\">\n" +
    "				<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "				<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "				<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "				<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "				<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "				<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "			</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("createUser/createUser.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("createUser/createUser.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"basic-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Registro de Usuario</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div>\n" +
    "	    <div>\n" +
    "			<form name=\"registerForm\" ng-submit=\"model.createUser()\" novalidate>\n" +
    "				<md-input-container flex>\n" +
    "					<label>Nombre</label>\n" +
    "	            	<input name=\"name\" ng-model=\"model.user.name\" required>\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "	        	<md-input-container flex>\n" +
    "					<label>Apellido</label>\n" +
    "	            	<input name=\"lastname\" ng-model=\"model.user.lastname\" required>\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "				<md-input-container flex>\n" +
    "					<label>Correo electrónico</label>\n" +
    "	            	<input name=\"email\" ng-model=\"model.user.email\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" required>\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "	        	<md-input-container flex>\n" +
    "					<label>Contraseña</label>\n" +
    "	            	<input type=\"password\" name=\"password\" ng-model=\"model.user.password\" required>\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "	        	<md-input-container flex>\n" +
    "					<label>Confirmar contraseña</label>\n" +
    "	            	<input type=\"password\" name=\"confirm_password\" ng-model=\"model.user.password_verify\" data-password-verify=\"model.user.password\" confirmPassword=\"{{model.user.password}}\" required>\n" +
    "	            	<div class=\"error\" ng-show=\"registerForm.password.$dirty && registerForm.last_name.$invalid\">\n" +
    "						<small class=\"error\" ng-show=\"registerForm.confirm_password.$error.confirmPassword\">Las contraseñas no coinciden.</small>\n" +
    "					</div>\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "	        	<md-input-container flex>\n" +
    "					<label>Celular</label>\n" +
    "	            	<input name=\"mobilephone\" ng-model=\"model.user.mobilephone\" required>\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "	        	<md-input-container flex>\n" +
    "	        		<md-button class=\"md-raised primary-btn\">Aceptar</md-button>\n" +
    "	        		<md-button class=\"redButton\" ng-click=\"model.cancel()\">Cancelar</md-button>\n" +
    "	        	</md-input-container>\n" +
    "			</form>\n" +
    "	    </div>\n" +
    "	    \n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Home of App mensajeria</h1>\n" +
    "\n" +
    "<p>Code it up</p>\n" +
    "\n" +
    "<p>\n" +
    "    <span ng-bind=\"model.someVar\" />\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in model.someList\">{{item}}</li>\n" +
    "    </ul>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"model.someFunctionUsedByTheHomePage()\">Click Me</button>\n" +
    "</p>");
}]);

angular.module("loginUser/loginUser.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("loginUser/loginUser.tpl.html",
    "<div class=\"account-container\">\n" +
    "    <div class=\"content clearfix\">\n" +
    "        <form name=\"loginForm\" ng-submit=\"model.loginUser(loginForm)\" novalidate>\n" +
    "            <h1>Iniciar Sesión</h1>                        \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <p>Por favor digita tus datos de usuario</p>\n" +
    "                    <p ng-show=\"loginForm.email.$invalid && !loginForm.email.$pristine\" class=\"help-block\">Ingresa un email valido.</p>\n" +
    "                    <div class=\"form-group input-group\" for=\"username\" >\n" +
    "                        <label class=\"input-group-addon\"><i class=\"fa icon-user fa-fw\"></i></label>\n" +
    "                        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"email\" ng-model=\"model.user.email\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" placeholder=\"Correo Electrónico\" class=\"login username-field\" required/>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group input-group\" for=\"password\">\n" +
    "                        <label class=\"input-group-addon\"><i class=\"fa icon-key fa-fw\"></i></label>\n" +
    "                        <input type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" ng-model=\"model.user.password\" placeholder=\"Contraseña\" class=\"login password-field\" required/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"login-actions\">\n" +
    "                <span class=\"login-checkbox\">\n" +
    "<!--                    <input id=\"Field\" name=\"Field\" type=\"checkbox\" class=\"field login-checkbox\" ng-model=\"model.rememberMe\" tabindex=\"4\" />\n" +
    "                    <label class=\"choice\" for=\"Field\">Recordar en este equipo.</label>-->\n" +
    "                    <span class=\"login-extra\">\n" +
    "                        <a href=\"\" ng-click=\"model.recoverPassword()\">¿Olvidaste tu contraseña?</a>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "                <button class=\"button btn btn-success btn-large\">Ingresar</button>\n" +
    "            </div>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "        <md-card class=\"basic-form\">\n" +
    "                <div>\n" +
    "                        <md-toolbar>\n" +
    "                        <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "                                <span class=\"md-flex\">Iniciar Sesión</span>\n" +
    "                        </div>\n" +
    "                        </md-toolbar>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                        <form name=\"loginForm\" ng-submit=\"model.loginUser(loginForm)\" novalidate>\n" +
    "                                <md-input-container flex>\n" +
    "                                <label>Correo electrónico</label>\n" +
    "                                <input type=\"text\" name=\"email\" ng-model=\"model.user.email\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" required>\n" +
    "                                \n" +
    "                                </md-input-container>\n" +
    "                                <p ng-show=\"loginForm.email.$invalid && !loginForm.email.$pristine\" class=\"help-block\">Ingresa un email valido.</p>\n" +
    "                                <md-input-container flex>\n" +
    "                                <label>Contraseña</label>\n" +
    "                                <input type=\"password\" name=\"password\" ng-model=\"model.user.password\" required>\n" +
    "                                \n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container flex>\n" +
    "                                <md-button class=\"md-raised primary-btn\" >Ingresar</md-button>\n" +
    "                                </md-input-container>\n" +
    "                                \n" +
    "                        </form>\n" +
    "                </div>\n" +
    "        </md-card>\n" +
    "</div>-->\n" +
    "\n" +
    "");
}]);

angular.module("loginUser/recoverDialog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("loginUser/recoverDialog.tpl.html",
    "<div class=\"hero-unit\">tod bien todo bonito</div>");
}]);

angular.module("messengerDetails/messengerDetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("messengerDetails/messengerDetails.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Detalles del Mensajero</span>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"infoContainer\">\n" +
    "			<form name=\"profileForm\" novalidate>\n" +
    "				<label class=\"titleField\">Nombre:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"newName\" ng-model=\"model.Messenger.name\" required>  </md-input-container>\n" +
    "\n" +
    "				<label class=\"titleField\">Apellido:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"newLastname\" ng-model=\"model.Messenger.lastname\"  required>  </md-input-container>\n" +
    "\n" +
    "				<label class=\"titleField\">Número Celular:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"newMobilephone\" ng-model=\"model.Messenger.mobilephone\" required>  </md-input-container>\n" +
    "\n" +
    "				<label class=\"titleField\">Email:</label>\n" +
    "				<br/>\n" +
    "				<label class=\"textField\">{{model.Messenger.email}}</label>\n" +
    "\n" +
    "				<br/>\n" +
    "\n" +
    "				<label class=\"titleField\">Placa:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"placa\" ng-model=\"model.Messenger.plate\"  required>  </md-input-container>\n" +
    "				\n" +
    "				<md-button class=\"md-raised primary-btn\" ng-click=\"model.updateMessengerProfile()\"  >Actualizar datos</md-button>\n" +
    "				\n" +
    "			</form>\n" +
    "		</div>\n" +
    "\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "	<md-card class=\"big-form\" ng-show=\"model.startedServices.length!=0\">\n" +
    "		<div  id=\"startedServices\" ng-click=\"model.turnAcceptedBool()\">\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Servicios Iniciados</span>\n" +
    "				<span flex></span>\n" +
    "				<i class=\"fa fa-caret-square-o-down arrow\"></i>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"AvailableServicesContainer\" ng-show=\"model.acceptedServicesBool\">\n" +
    "			\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.startedServices\" ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Usuario</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.user_info.name}} {{item.user_info.lastname}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Estado del servicio</label>\n" +
    "					<h6 class=\"textInsideCards\">{{model.traslateStatusFunction(item.status)}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "	<md-card class=\"big-form\" ng-show=\"model.finishedServices.length!=0\">\n" +
    "		<div id=\"completedServices\" ng-click=\"model.turnCompletedBool()\">\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Servicios Completados</span>\n" +
    "				<span flex></span>\n" +
    "				<i class=\"fa fa-caret-square-o-down arrow\"></i>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"AvailableServicesContainer\" ng-show=\"model.completedServicesBool\">\n" +
    "			\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.finishedServices\" ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Usuario</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.user_info.name}} {{item.user_info.lastname}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Estado del servicio</label>\n" +
    "					<h6 class=\"textInsideCards\">{{model.traslateStatusFunction(item.status)}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("messengers/messengers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("messengers/messengers.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Mensajeros</span>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div >\n" +
    "\n" +
    "		<div id=\"addNewMessenger\" ng-show=\"!model.messengerBool\">\n" +
    "		\n" +
    "\n" +
    "				<div id=\"searchMessengerDiv\">\n" +
    "					\n" +
    "					<h6 class=\"titleField\">Ingresa el email de un mensajero para buscarlo</h6>\n" +
    "					<md-input-container flex>\n" +
    "					<label>Ingresa un email para buscar un mensajero</label>\n" +
    "	            	<input type=\"text\" name=\"email\" ng-model=\"model.emailSearchMessenger\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" >\n" +
    "	        		</md-input-container>\n" +
    "	        		<md-button class=\"blueButton\"  ng-click=\"model.searchMessenger()\">Buscar</md-button>\n" +
    "	        		<h6 id=\"notFound\" ng-show=\"!model.wasFoundBool\">El mensajero no ha sido encontrado</h6>\n" +
    "				</div>\n" +
    "				\n" +
    "\n" +
    "				<md-card class=\"md-default-theme\" ng-show=\"model.messenger_info\">\n" +
    "\n" +
    "				<div>\n" +
    "					\n" +
    "					<div id=\"containerInfoSearch\" ng-click=\"model.goToMessengerDetails(messenger._id)\">\n" +
    "						<label class=\"titleInsideCards\"> Nombre</label>\n" +
    "						<h6 class=\"textInsideCards\">{{model.messenger_info.name}} {{model.messenger_info.lastname}}</h6>\n" +
    "						<label class=\"titleInsideCards\"> Email</label>\n" +
    "						<h6 class=\"textInsideCards\">{{model.messenger_info.email}}</h6>\n" +
    "						\n" +
    "					</div>\n" +
    "					<div id=\"colorBox\"></div>\n" +
    "				</div>\n" +
    "					\n" +
    "					<div>\n" +
    "						<md-divider></md-divider>\n" +
    "						<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.goToMessengerDetails(messenger._id)\">Detalles</md-button>\n" +
    "						<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.deleteUser(messenger._id)\">Eliminar</md-button>\n" +
    "					</div>\n" +
    "				</md-card>\n" +
    "\n" +
    "		</div>\n" +
    "	\n" +
    "		<md-card class=\"md-default-theme\" ng-repeat=\"messenger in model.messengers\" >\n" +
    "				<div id=\"containerInfo\" ng-click=\"model.goToMessengerDetails(messenger._id)\">\n" +
    "					<label class=\"titleInsideCards\"> Nombre</label>\n" +
    "					<h6 class=\"textInsideCards\">{{messenger.name}} {{messenger.lastname}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Email</label>\n" +
    "					<h6 class=\"textInsideCards\">{{messenger.email}}</h6>\n" +
    "					\n" +
    "				</div>\n" +
    "				<div>\n" +
    "					<md-divider></md-divider>\n" +
    "					<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.goToMessengerDetails(messenger._id)\">Detalles</md-button>\n" +
    "					<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.deleteUser(messenger._id)\">Eliminar</md-button>\n" +
    "				</div>\n" +
    "		</md-card>\n" +
    "\n" +
    "		<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.getMessengers()\" ng-show=\"model.showMoreBool\">BUSCAR MAS</md-button>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "				<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "					<span class=\"md-flex\">Estadísticas</span>\n" +
    "					<md-button id=\"reloadButton\" ng-click=\"model.reload()\">\n" +
    "				    		<i class=\"fa fa-refresh  fa-lg\"></i>\n" +
    "					</md-button>\n" +
    "				</div>\n" +
    "				\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "		<div id=\"infoContainer\">\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Número de usuarios</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.users}}</h6>\n" +
    "			</div>\n" +
    "			<md-divider></md-divider>\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Número de mensajeros</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.messengers}}</h6>\n" +
    "			</div>\n" +
    "			<md-divider></md-divider>\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Total de servicios</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.allServices}}</h6>\n" +
    "			</div>\n" +
    "			<md-divider></md-divider>\n" +
    "\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Servicios sin aceptar</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.available}}</h6>\n" +
    "			</div>\n" +
    "			<md-divider></md-divider>\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Servicios aceptados</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.accepted}}</h6>\n" +
    "			</div>\n" +
    "			<md-divider></md-divider>\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Servicios en transito</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.inTransit}}</h6>\n" +
    "			</div>\n" +
    "			\n" +
    "			<md-divider></md-divider>\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Servicios retornando</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.returning}}</h6>\n" +
    "			</div>\n" +
    "			<md-divider></md-divider>\n" +
    "			<div class=\"listDiv\">\n" +
    "				<h6 class=\"titleField title\">Servicios Terminados</h6><span flex></span>\n" +
    "				<h6 class=\"textField number\">{{model.delivered + model.returned}}</h6>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("ratingMessenger/ratingMessenger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ratingMessenger/ratingMessenger.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Calificar Mensajero</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<rating id=\"rating\" value=\"rate\" max=\"max\" readonly=\"false\"  on-leave=\"overStar = null\"></rating>\n" +
    "   		 \n" +
    "   		 <h6 id=\"numberRate\">{{rate}}</h6>\n" +
    "   		 \n" +
    "		<md-input-container flex>\n" +
    "					<label id=\"tileReview\">Opiniones</label>\n" +
    "	            	<input  id=\"review\" name=\"email\" ng-model=\"model.review\" required>\n" +
    "	     </md-input-container>\n" +
    "	    <md-button id=\"blueButton\" ng-click	=\"model.ratingMessenger()\" >Calificar<md-button>\n" +
    "	    \n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("recoverPassword/changePass.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("recoverPassword/changePass.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"basic-form\">\n" +
    "	<div>\n" +
    "		<md-toolbar>\n" +
    "		<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			<span class=\"md-flex\">Recuperar Contraseña</span>\n" +
    "		</div>\n" +
    "		</md-toolbar>\n" +
    "	</div>\n" +
    "	<div>\n" +
    "		<form name=\"changePassForm\" novalidate>\n" +
    "			\n" +
    "			<md-input-container flex>\n" +
    "			<label>Ingrese la nueva contraseña</label>\n" +
    "			<input type=\"password\" name=\"password\" ng-model=\"model.password\"  required>\n" +
    "\n" +
    "			</md-input-container>\n" +
    "\n" +
    "			<md-input-container flex>\n" +
    "			<label>Repita la contraseña</label>\n" +
    "			<input type=\"password\" name=\"repeatPassword\" ng-model=\"model.repeatPassword\"  required>\n" +
    "			\n" +
    "			</md-input-container>\n" +
    "			\n" +
    "			<md-input-container flex>\n" +
    "			<md-button class=\"md-raised primary-btn\" ng-click=\"model.changePass()\" >Cambiar</md-button>\n" +
    "			<md-button class=\"md-raised primary-btn\" ng-click=\"model.goLogin()\" >Volver</md-button>\n" +
    "			</md-input-container>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("recoverPassword/recoverPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("recoverPassword/recoverPassword.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"basic-form\">\n" +
    "	<div>\n" +
    "		<md-toolbar>\n" +
    "		<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			<span class=\"md-flex\">Recuperar Contraseña</span>\n" +
    "		</div>\n" +
    "		</md-toolbar>\n" +
    "	</div>\n" +
    "	<div>\n" +
    "		<form name=\"recoverForm\" ng-submit=\"model.loginUser()\" novalidate>\n" +
    "			\n" +
    "			<md-input-container flex>\n" +
    "			<label>Escriba su email</label>\n" +
    "			<input type=\"text\" name=\"email\" ng-model=\"model.email\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" required>\n" +
    "			\n" +
    "			</md-input-container>\n" +
    "			\n" +
    "			<md-input-container flex>\n" +
    "			<md-button class=\"md-raised primary-btn\" ng-click=\"model.recoverPass()\" >Recuperar</md-button>\n" +
    "			<md-button class=\"md-raised primary-btn\" ng-click=\"model.goLogin()\" >Volver</md-button>\n" +
    "			</md-input-container>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("requestMessenger/customDialogUseAddress.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("requestMessenger/customDialogUseAddress.tpl.html",
    "<md-dialog aria-label=\"\">\n" +
    "  <md-dialog-content class=\"sticky-container\">\n" +
    "    \n" +
    "    <div>\n" +
    "      <label class=\"titleField\" id=\"titleUseAddress\">Como deseas usar esta dirección?</label>\n" +
    "    </div>\n" +
    "  </md-dialog-content>\n" +
    "  <div class=\"md-actions\" layout=\"row\">\n" +
    "    \n" +
    "    <span flex></span>\n" +
    "    <md-button ng-click=\"answer('pickup')\" class=\"md-primary\">\n" +
    "     Recogida\n" +
    "    </md-button>\n" +
    "    <md-button ng-click=\"answer('delivery')\" class=\"md-primary\">\n" +
    "      Entrega\n" +
    "    </md-button>\n" +
    "  </div>\n" +
    "</md-dialog>");
}]);

angular.module("requestMessenger/requestMessenger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("requestMessenger/requestMessenger.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Solicitar Servicio</span>\n" +
    "			    </div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "	    <div>\n" +
    "			<form name=\"requestMessengerForm\" novalidate>\n" +
    "				<md-card>\n" +
    "\n" +
    "\n" +
    "					<div id=\"addNewMessenger\" >\n" +
    "						<h6 class=\"titleField\">Ingresa el email de un usuario para buscarlo y pedir el servicio en su nombre</h6>\n" +
    "						<md-input-container flex>\n" +
    "							<label class=\"titleField\">Ingresa un email para buscar un usuario</label>\n" +
    "			            	<input class=\"titleField\" type=\"text\" name=\"email\" ng-model=\"model.emailSearchUser\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" >\n" +
    "			        	</md-input-container>\n" +
    "\n" +
    "						<md-button class=\"blueButton\"  ng-click=\"model.searchUser()\">Buscar</md-button>\n" +
    "					</div>\n" +
    "					\n" +
    "\n" +
    "					<md-input-container flex>\n" +
    "						<label class=\"titleField\">Nombre de Servicio</label>\n" +
    "		            	<input name=\"item_name\" ng-model=\"model.delivery.item_name\" required>\n" +
    "		        	</md-input-container>\n" +
    "\n" +
    "		        	<md-input-container flex>\n" +
    "						<label  class=\"titleField\">Dirección de Recogida</label>\n" +
    "		            	<input class=\" textField\"name=\"pickup_address\" ng-model=\"pickup_address\" required >\n" +
    "		        	</md-input-container>\n" +
    "\n" +
    "		        	<md-input-container flex>\n" +
    "						<label  class=\"titleField\">Dirección de Entrega</label>\n" +
    "		            	<input class=\" textField\" name=\"delivery_address\" ng-model=\"delivery_address\" required>\n" +
    "		        	</md-input-container>\n" +
    "\n" +
    "		        	<md-content  class=\"md-padding\" style=\"height: 400px;padding: 14px;\">\n" +
    "						<delivery-map class=\"map-container\" callback=\"setLatLong(lat1, lon1,lat2, lon2,valueBool)\" delivery=\"model.delivery\" pickup=\"model.pickup\"></delivery-map>\n" +
    "		        	</md-content>\n" +
    "		        	<md-switch class=\"titleField\" aria-label=\"Ida y Vuelta\" ng-model=\"model.roundtrip\">\n" +
    "					    Ida y Vuelta \n" +
    "					</md-switch>\n" +
    "					<md-button class=\"md-raised primary-btn\"  id=\"buttonHistoryAddress\" ng-click= \"model.isShowing()\">Historial de direcciones</md-button>\n" +
    "\n" +
    "					<md-card ng-show=\"model.showAddressBool\">\n" +
    "						<label class=\"titleField\">Direcciones de Recogida</label>\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"pickup in model.pickUpAddressSave\" ng-click=\"useAddress(pickup)\"><a class=\" textField\" href>{{pickup.address}}</a></li>\n" +
    "						</ul>\n" +
    "						<label class=\"titleField\" >Direcciones de Entrega</label>\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"delivery in model.deliveryAddressSave\" ng-click=\"useAddress(delivery)\"><a class=\" textField\" href>{{delivery.address}}</a></li>\n" +
    "						</ul>\n" +
    "					</md-card>\n" +
    "				</md-card>\n" +
    "				\n" +
    "				<md-card class=\"top-fix\">\n" +
    "					<md-input-container flex>\n" +
    "						<label>Dia y hora de Recogida</label>\n" +
    "		        	</md-input-container>\n" +
    "		        	<time-date-picker ng-model=\"model.delivery.pickup_time\" required></time-date-picker>\n" +
    "		        	<md-input-container flex>\n" +
    "						<label>Dia y hora de Entrega</label>\n" +
    "		        	</md-input-container>\n" +
    "		        	<time-date-picker ng-model=\"model.delivery.deadline\" required></time-date-picker>\n" +
    "		        	<md-input-container flex>\n" +
    "						<label >Valor declarado de la mercancia</label>\n" +
    "		            	<input name=\"declared_value\" ng-model=\"model.delivery.declared_value\" placeholder=\"min. $1.000\" required>\n" +
    "		        	</md-input-container>\n" +
    "		        	<md-input-container flex>\n" +
    "						<label>Instrucciones para mensajero</label>\n" +
    "		            	<textarea name=\"instructions\" ng-model=\"model.delivery.instructions\" required></textarea>\n" +
    "		        	</md-input-container>\n" +
    "				</md-card>\n" +
    "				<md-toolbar ng-show=\"pickup_address && delivery_address\" class=\"md-primary\" layout-align=\"center center\">\n" +
    "				    <span layout-align=\"center center\">\n" +
    "				    	VALOR APROXIMADO DEL SERVICIO\n" +
    "				    </span>\n" +
    "				    <span layout-align=\"center center\" id=\"value_delivery\">\n" +
    "				    	<span ng-show=\"currency\">COP</span> {{deliveryPrice}}\n" +
    "				    </span>\n" +
    "				</md-toolbar>\n" +
    "	        	<md-input-container flex>\n" +
    "	        		<md-button class=\"md-raised primary-btn\" ng-click=\"model.requestMessenger()\">Solicitar</md-button>\n" +
    "	        	</md-input-container>\n" +
    "			</form>\n" +
    "	    </div>\n" +
    "	    <md-divider></md-divider>\n" +
    "	</md-card>\n" +
    "</div>\n" +
    "");
}]);

angular.module("requestedServices/requestedServices.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("requestedServices/requestedServices.tpl.html",
    "<h1>RequestedServices</h1>");
}]);

angular.module("searchingMessenger/searchingMessenger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("searchingMessenger/searchingMessenger.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"basic-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Buscando mensajero</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div>\n" +
    "	    <div>\n" +
    "			<md-subheader id=\"search_label\" class=\"md-primary\" layout-align=\"center center\">\n" +
    "				En este momento estamos buscando un mensajero cercano a ti, por favor espera un momento.\n" +
    "			</md-subheader>\n" +
    "			<md-card id=\"search_loading\">\n" +
    "				<img src=\"https://enroll.clearme.com/ClearMe/images/please_wait.gif\">\n" +
    "			</md-card>\n" +
    "	    </div>\n" +
    "	    <md-divider></md-divider>\n" +
    "	    <md-button class=\"md-raised md-warn\" ng-click=\"model.cancel()\">Cancelar</md-button>\n" +
    "	</md-card>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("serviceDetails/serviceDetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("serviceDetails/serviceDetails.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\" id=\"titleServiceDetails\">Detalles del Servicio</span>\n" +
    "			    	\n" +
    "			    	<md-button id=\"reloadButton\" ng-click=\"model.reload()\">\n" +
    "			    		<i class=\"fa fa-refresh  fa-lg\"></i>\n" +
    "			    	</md-button>\n" +
    "			    </div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		\n" +
    "		\n" +
    "		<md-card id=\"serviceDetailsContainer\" >\n" +
    "			<label class=\"titleField\">Nombre del Usuario</label>\n" +
    "			<h6 class=\"textField\" >{{model.deliveryItemInfo.user_info.name}} {{model.deliveryItemInfo.user_info.lastname}}</h6>\n" +
    "			<md-divider></md-divider>\n" +
    "\n" +
    "			<label class=\"titleField\">Nombre de Servicio</label>\n" +
    "			<h6 class=\"textField\" >{{model.deliveryItemInfo.item_name}}</h6>\n" +
    "			<md-divider></md-divider>\n" +
    "\n" +
    "			<label class=\"titleField\">Lugar de Recogida</label>\n" +
    "			<h6  class=\"textField\" >{{model.deliveryItemInfo.pickup_object.address}}</h6>\n" +
    "			<md-divider></md-divider>\n" +
    "\n" +
    "			<label class=\"titleField\">Lugar de Entrega</label>\n" +
    "			<h6  class=\"textField\" >{{model.deliveryItemInfo.delivery_object.address}}</h6>\n" +
    "			<md-divider></md-divider>\n" +
    "\n" +
    "			<label class=\"titleField\">Fecha de Recogida</label>\n" +
    "			<h6  class=\"textField\" >{{model.pickupDate | date:'dd/MM/yyyy hh:mma'}}</h6>\n" +
    "			<md-divider></md-divider>\n" +
    "\n" +
    "			<label class=\"titleField\">Valor Aproximado del Servicio</label>\n" +
    "			<h6  class=\"textField\" >{{model.deliveryItemInfo.price_to_pay}}</h6>\n" +
    "		</md-card>\n" +
    "\n" +
    "		\n" +
    "\n" +
    "		<md-card id=\"messengerContainer\" >\n" +
    "\n" +
    "			<div id=\"infoContainer\" ng-show=\"model.messengerBool\">\n" +
    "				<h4>Información del mensajero</h4>\n" +
    "\n" +
    "				<label class=\"titleField\">Nombre del Mensajero</label>\n" +
    "				<h6 class=\"textField\" >{{model.deliveryItemInfo.messenger_info.name}} {{model.deliveryItemInfo.messenger_info.lastname}}</h6>\n" +
    "				<md-divider></md-divider>\n" +
    "\n" +
    "				<label class=\"titleField\">Teléfono</label>\n" +
    "				<h6 class=\"textField\" >{{model.deliveryItemInfo.messenger_info.mobilephone}}</h6>\n" +
    "				<md-divider></md-divider>\n" +
    "\n" +
    "				<label class=\"titleField\">ETA</label>\n" +
    "				<h6 class=\"textField\" >{{model.leftTime}} min</h6>\n" +
    "\n" +
    "				<md-button id=\"redButton\"  ng-click=\"model.removeMessenger()\">Remover mensajero</md-button>\n" +
    "			</div>\n" +
    "\n" +
    "			<div id=\"addNewMessenger\" ng-show=\"!model.messengerBool\">\n" +
    "				<h6 class=\"titleField\">Estes servicio no ha sido aceptado aún, si deseas asignar este servicio a un mensajero, buscalo por su email y luego presiona añadir</h6>\n" +
    "				<md-input-container flex>\n" +
    "					<label>Ingresa un email para buscar un mensajero</label>\n" +
    "	            	<input type=\"text\" name=\"email\" ng-model=\"model.emailSearchMessenger\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" >\n" +
    "	        	</md-input-container>\n" +
    "\n" +
    "				<md-button class=\"blueButton\"  ng-click=\"model.searchMessenger()\">Buscar</md-button>\n" +
    "\n" +
    "				<div ng-show=\"model.messenger_info\">\n" +
    "					<label>Datos del mensajero buscado</label>\n" +
    "					<br/>\n" +
    "					<label>Nombre: {{model.messenger_info.name}} {{model.messenger_info.lastname}}</label>\n" +
    "					<br/>\n" +
    "					<label>Celular: {{model.messenger_info.mobilephone}}</label>\n" +
    "				</div>\n" +
    "\n" +
    "				<md-button class=\"blueButton\"  ng-click=\"model.assingMessenger()\" ng-show=\"model.messenger_info\">Asignar</md-button>\n" +
    "\n" +
    "\n" +
    "				\n" +
    "\n" +
    "			</div>\n" +
    "			\n" +
    "			\n" +
    "		</md-card>\n" +
    "\n" +
    "\n" +
    "		<md-card id=\"photoContainer\" ng-show=\"model.imageBool\">\n" +
    "			<label class=\"titleField\">Fotos del Servicio</label>\n" +
    "			<div>\n" +
    "				<ul class=\"gallery-container\" style=\"width:{{model.images.length * 100}}px\">\n" +
    "					<li class=\"img-resize\" ng-repeat=\"image in model.images\">\n" +
    "						<img   ng-src=\"{{image.url}}\" ng-click=\"model.showBigImage(image.url)\">\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "							\n" +
    "		</md-card>\n" +
    "		<md-card id=\"serviceStatusContainer\" >\n" +
    "			<label class=\"titleField\">Estado actual del Servicio:</label><br/>\n" +
    "			<h6 id=\"serviceStatus\" ng-model=\"model.serviceStatus\">{{model.serviceStatus}}</h6><br/>\n" +
    "			<h6 ng-show=\"model.setAvailableButtonBool\" class=\"textField\">Razón: {{model.deliveryItemInfo.abort_reason}}</h6>\n" +
    "		\n" +
    "	    <md-radio-group ng-model=\"model.newState\" ng-show=\"!model.deliveryItemInfo.roundtrip\">\n" +
    "	      <md-radio-button value=\"available\" class=\"md-primary\"> Disponible </md-radio-button>\n" +
    "	      <md-radio-button value=\"accepted\"> Aceptado </md-radio-button>\n" +
    "	      <md-radio-button value=\"in-transit\"> En tránsito</md-radio-button>\n" +
    "	      <md-radio-button value=\"delivered\"> Entregado </md-radio-button>\n" +
    "	      <!--<md-radio-button value=\"aborted\"> Abortado </md-radio-button>-->\n" +
    "	    </md-radio-group>\n" +
    "\n" +
    "	    <md-radio-group ng-model=\"model.newState\" ng-show=\"model.deliveryItemInfo.roundtrip\">\n" +
    "	      <md-radio-button value=\"available\" class=\"md-primary\"> Disponible </md-radio-button>\n" +
    "	      <md-radio-button value=\"accepted\"> Aceptado </md-radio-button>\n" +
    "	      <md-radio-button value=\"in-transit\"> En tránsito</md-radio-button>\n" +
    "	      <md-radio-button value=\"returning\"> Volviendo </md-radio-button>\n" +
    "	      <md-radio-button value=\"returned\"> Retornado </md-radio-button>\n" +
    "	      <!--<md-radio-button value=\"aborted\"> Abortado </md-radio-button>-->\n" +
    "	    </md-radio-group>\n" +
    "	    \n" +
    "\n" +
    "		<md-button id=\"blueButton\" ng-click=\"model.changeStatus()\" >Poner estado </md-button>\n" +
    "\n" +
    "		<md-button id=\"redButton\" ng-click=\"model.cancelService()\" ng-show=\"model.deliveryItemInfo.status!== 'available'\">Abortar Servicio</md-button>\n" +
    "	</md-card>\n" +
    "	<div>");
}]);

angular.module("serviceDetails/showBigImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("serviceDetails/showBigImage.tpl.html",
    "<md-dialog aria-label=\"\" style=\"width:34%;\" >\n" +
    "   \n" +
    "    \n" +
    "    <img ng-src=\"{{currentUrl}}\" style=\"width:100%;\">\n" +
    "  \n" +
    "</md-dialog>");
}]);

angular.module("termsConditions/termsConditions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("termsConditions/termsConditions.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "			    	<span class=\"md-flex\">Términos y condiciones</span>\n" +
    "			    </div>\n" +
    "			  </md-toolbar>\n" +
    "		</div >\n" +
    "			<md-card class=\"md-default-theme\" >\n" +
    "				<h6 id=\"terms\">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "				</h6>\n" +
    "\n" +
    "			</md-card>\n" +
    "	</md-card>\n" +
    "</div>");
}]);

angular.module("userDetails/userDetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("userDetails/userDetails.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Detalles del Usuario</span>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"infoContainer\">\n" +
    "			<form name=\"profileForm\" novalidate>\n" +
    "				<label class=\"titleField\">Nombre:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"newName\" ng-model=\"model.User.name\" required>  </md-input-container>\n" +
    "				<label class=\"titleField\">Apellido:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"newLastname\" ng-model=\"model.User.lastname\"  required>  </md-input-container>\n" +
    "				<label class=\"titleField\">Número Celular:</label>\n" +
    "				<md-input-container flex>  <input class=\"textField\" name=\"newMobilephone\" ng-model=\"model.User.mobilephone\" required>  </md-input-container>\n" +
    "				<label class=\"titleField\">Email:</label>\n" +
    "				<br/>\n" +
    "				<label class=\"textField\">{{model.User.email}}</label>\n" +
    "				\n" +
    "				\n" +
    "				<md-button class=\"md-raised primary-btn\" ng-click=\"model.updateProfile()\"  >Actualizar datos</md-button>\n" +
    "				\n" +
    "			</form>\n" +
    "		</div>\n" +
    "\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "	<md-card class=\"big-form\" ng-show=\"model.verifyAvailableservices()\">\n" +
    "		<div id=\"availableServices\" ng-click=\"model.turnAvailableBool()\">\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Servicios sin Aceptar</span>\n" +
    "				<span flex></span>\n" +
    "				<i class=\"fa fa-caret-square-o-down  arrow\"></i>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"AvailableServicesContainer\" ng-show=\"model.availableServicesBool\">\n" +
    "			\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.activeServices\" ng-show=\"item.status == 'available'\"   ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "	<md-card class=\"big-form\" ng-show=\"model.verifyAceptedservices()\">\n" +
    "		<div id=\"acceptedServices\" ng-click=\"model.turnAcceptedBool()\">\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Servicios Aceptados</span>\n" +
    "				<span flex></span>\n" +
    "				<i class=\"fa fa-caret-square-o-down  arrow\"></i>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"AcceptedServicesContainer\" ng-show=\"model.acceptedServicesBool\">\n" +
    "			\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.activeServices\" ng-show=\"item.status != 'available'\"   ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "	<md-card class=\"big-form\" ng-show=\"model.completedServices.length!=0\">\n" +
    "		<div  id=\"completedServices\" ng-click=\"model.turnCompletedBool()\">\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Servicios Completados</span>\n" +
    "				<span flex></span>\n" +
    "				<i class=\"fa fa-caret-square-o-down  arrow\"></i>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"completedServicesContainer\" ng-show=\"model.completedServicesBool\">\n" +
    "			\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.completedServices\" ng-show=\"item.status != 'available'\"   ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "	<md-card class=\"big-form\" ng-show=\"model.abortedServices.length!=0\">\n" +
    "		<div id=\"abortedServices\" ng-click=\"model.turnAbortedBool()\">\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Servicios Abortados</span>\n" +
    "				<span flex></span>\n" +
    "				<i class=\"fa fa-caret-square-o-down  arrow\"></i>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"abortedServicesContainer\" ng-show=\"model.abortedServicesBool\">\n" +
    "			\n" +
    "			<md-card class=\"md-default-theme\" ng-repeat=\"item in model.abortedServices\" ng-show=\"item.status != 'available'\"   ng-click=\"model.goToServiceDetails(item._id)\">\n" +
    "				<div id=\"containerInfo\">\n" +
    "					<label class=\"titleInsideCards\"> Pedido</label>			\n" +
    "					<h6 class=\"textInsideCards\">{{item.item_name}}</h6>		\n" +
    "					<label class=\"titleInsideCards\"> Dirección de recogida</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.pickup_object.address}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Dirección de Entrega</label>\n" +
    "					<h6 class=\"textInsideCards\">{{item.delivery_object.address}}</h6>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users.tpl.html",
    "<div layout=\"column\" layout-align=\"center center\" class=\"solo-box\">\n" +
    "	<md-card class=\"big-form\">\n" +
    "		<div>\n" +
    "			<md-toolbar>\n" +
    "			<div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "				<span class=\"md-flex\">Usuarios</span>\n" +
    "			</div>\n" +
    "			</md-toolbar>\n" +
    "		</div >\n" +
    "\n" +
    "		<div id=\"addNewMessenger\" >\n" +
    "						<div id=\"searchUserDiv\">\n" +
    "							<h6 class=\"titleField\">Ingresa el email de un usuario para buscarlo</h6>\n" +
    "							<md-input-container flex>\n" +
    "							<label>Ingresa un email para buscar un usuario</label>\n" +
    "			            	<input type=\"text\" name=\"email\" ng-model=\"model.emailSearchUser\" ng-pattern=\"/^[A-Za-z0-9._%+]+@[A-Za-z0-9]+\\.[A-Za-z]{1,5}$/\" >\n" +
    "			        		</md-input-container>\n" +
    "\n" +
    "							<md-button class=\"blueButton\"  ng-click=\"model.searchUser()\">Buscar</md-button>\n" +
    "						</div>\n" +
    "						\n" +
    "\n" +
    "\n" +
    "						<md-card class=\"md-default-theme\"  ng-show=\"model.userInformation\">\n" +
    "							<div>\n" +
    "								<div id=\"containerInfoSearch\" ng-click=\"model.goToUserDetails(model.userInformation._id)\">\n" +
    "								<label class=\"titleInsideCards\"> Nombre</label>\n" +
    "								<h6 class=\"textInsideCards\">{{model.userInformation.name}} {{model.userInformation.lastname}}</h6>\n" +
    "								<label class=\"titleInsideCards\"> Email</label>\n" +
    "								<h6 class=\"textInsideCards\">{{model.userInformation.email}}</h6>\n" +
    "								\n" +
    "							</div>\n" +
    "							<div id=\"colorBox\"></div>\n" +
    "								\n" +
    "							</div>\n" +
    "							\n" +
    "							<div>\n" +
    "								<md-divider></md-divider>\n" +
    "								<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.goToUserDetails(user._id)\">Detalles</md-button>\n" +
    "								<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.deleteUser(user._id)\">Eliminar</md-button>\n" +
    "								</div>\n" +
    "						</md-card>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	\n" +
    "		<md-card class=\"md-default-theme\" ng-repeat=\"user in model.users\" >\n" +
    "				<div id=\"containerInfo\"  ng-click=\"model.goToUserDetails(user._id)\">\n" +
    "					<label class=\"titleInsideCards\"> Nombre</label>\n" +
    "					<h6 class=\"textInsideCards\">{{user.name}} {{user.lastname}}</h6>\n" +
    "					<label class=\"titleInsideCards\"> Email</label>\n" +
    "					<h6 class=\"textInsideCards\">{{user.email}}</h6>\n" +
    "					\n" +
    "				</div>\n" +
    "				<div>\n" +
    "					<md-divider></md-divider>\n" +
    "					<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.goToUserDetails(user._id)\">Detalles</md-button>\n" +
    "					<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.deleteUser(user._id)\">Eliminar</md-button>\n" +
    "				</div>\n" +
    "		</md-card>\n" +
    "		<md-button class=\"md-primary v-margin-btn\" ng-click=\"model.getUsers()\" ng-show=\"model.showMoreBool\">BUSCAR MAS</md-button>\n" +
    "	</md-card>\n" +
    "</div>");
}]);
