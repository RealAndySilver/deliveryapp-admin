angular.module('templates-common', ['alerts/loadingDialog.tpl.html', 'getAddresses/getAddresses.tpl.html', 'session/session.tpl.html', 'userMap/deliveryMap.tpl.html']);

angular.module("alerts/loadingDialog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("alerts/loadingDialog.tpl.html",
    "<md-dialog aria-label=\"\" class=\"loading-container\">\n" +
    "  <md-dialog-content class=\"sticky-container\">\n" +
    "    <md-subheader class=\"md-sticky-no-effect\">Cargando...</md-subheader>\n" +
    "    <div class=\"loading-icon\">\n" +
    "      <md-progress-circular md-mode=\"indeterminate\" ></md-progress-circular>\n" +
    "    </div>\n" +
    "  </md-dialog-content>\n" +
    "  <div class=\"md-actions\" layout=\"row\">\n" +
    "    \n" +
    "    <span flex></span>\n" +
    "    \n" +
    "  </div>\n" +
    "</md-dialog>");
}]);

angular.module("getAddresses/getAddresses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("getAddresses/getAddresses.tpl.html",
    "<md-dialog aria-label=\"Mango (Fruit)\">\n" +
    "  <md-toolbar>\n" +
    "    <div class=\"md-toolbar-tools\" layout-align=\"center center\">\n" +
    "    	<span class=\"md-flex\">Historial de Direcciones</span>\n" +
    "    </div>\n" +
    "  </md-toolbar>\n" +
    "  <md-content>\n" +
    "\n" +
    "    <md-subheader class=\"md-primary\">Direcciones de Recogida</md-subheader>\n" +
    "    <md-list>	\n" +
    "      <!-- <md-item ng-repeat=\"item in todos\"> -->\n" +
    "	      <md-item>\n" +
    "	        <md-item-content>\n" +
    "	          <div class=\"md-tile-content\">\n" +
    "	            <p>\n" +
    "	              calle 125 #45-98\n" +
    "	            </p>\n" +
    "	          </div>\n" +
    "	        </md-item-content>\n" +
    "	        <md-divider inset></md-divider>\n" +
    "	      </md-item>\n" +
    "          <md-divider inset></md-divider>\n" +
    "      </md-item>\n" +
    "    </md-list>\n" +
    "\n" +
    "	<md-subheader class=\"md-primary\">Direcciones de Entrega</md-subheader>\n" +
    "    <md-list>	\n" +
    "      <!-- <md-item ng-repeat=\"item in todos\"> -->\n" +
    "	      <md-item>\n" +
    "	        <md-item-content>\n" +
    "	          <div class=\"md-tile-content\">\n" +
    "	            <p>\n" +
    "	              carrera 14 #3-76\n" +
    "	            </p>\n" +
    "	          </div>\n" +
    "	        </md-item-content>\n" +
    "	        <md-divider inset></md-divider>\n" +
    "	      </md-item>\n" +
    "          <md-divider inset></md-divider>\n" +
    "      </md-item>\n" +
    "    </md-list>	\n" +
    "\n" +
    "  </md-content>\n" +
    "</md-dialog>");
}]);

angular.module("session/session.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("session/session.tpl.html",
    "<h1>Session</h1>");
}]);

angular.module("userMap/deliveryMap.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("userMap/deliveryMap.tpl.html",
    "<div>\n" +
    "	<div>\n" +
    "		<md-button class=\"md-raised mapButtons\" ng-class=\"{'primary-btn':pickupBool}\" ng-click=\"model.pickupOrDeliveryAddress()\"> Recogida</md-button>\n" +
    "		<md-button class=\"md-raised mapButtons\" ng-class=\"{'primary-btn':!pickupBool}\" ng-click=\"model.pickupOrDeliveryAddress()\"> Entrega</md-button>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div id=\"delmap\" class=\"map\"></div>\n" +
    "	<img id=\"delmarker\" src=\"assets/map_indicator.png\">\n" +
    "</div>");
}]);
