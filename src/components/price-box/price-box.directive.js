"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstPriceBox", Directive);

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
				featured: "@",
				code: "@"
			},
			link: function(theScope){
				theScope.onBuyClick = function(){
					console.log(theScope.code);
					console.log('Buying');
					PagSeguroLightbox('F1F143237777E9DEE476DFAC6A32382A');
				}
			}
		};
	}
})();