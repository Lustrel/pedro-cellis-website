"use strict";

angular
    .module("Website", ["ngRoute"])
    .config(function($routeProvider, $httpProvider){
        var templatesPath = "./dist/templates/pages";

        // Routes configuration
        $routeProvider
            .when("/", { templateUrl: (templatesPath + "/home/home.template.html") });
    });; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("priceBox", Directive);

	function Directive() {
		return {
			restrict: "E",
            templateUrl: "./dist/templates/components/price-box/price-box.template.html",
            transclude: true,
            replace: true,
			scope: {
				title: "@",
                price: "@",
				description: "@",
				featured: "@"
			}
		};
	}
})();