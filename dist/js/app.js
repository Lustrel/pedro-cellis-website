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
		.directive("lstAccordionItem", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/accordion-item/accordion-item.template.html",
			transclude: true,
			replace: true,
			scope: {
				title: "@"
			},
			link: function(theScope, theElement, theAttributes){
				var $element = $(theElement);
				var $question = $element.find(".lst-title");
				var $content = $element.find(".lst-content");

				$content.css("display", "none");

				$question.click(function(){
					$content.slideToggle();
				});
			}
		};
	}
})();; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstInstaThumbs", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/insta-thumbs/insta-thumbs.template.html",
			transclude: true,
			replace: true,
			link: function(theScope, theElement){
				var feed = new Instafeed({
					get: "user",
					userId: "421923937",
					clientId: "79e905681316484b9fe108bbef5774fb",
					accessToken: "421923937.1677ed0.8b7b578910ea4c08a063c82d882bffba",
					target: angular.element(theElement)[0],
					sortBy: "most-recent",
					limit: 6,
					template: '<a target="_blank" href="{{link}}"><img class="lst-thumb" src="{{image}}"/></a>'
				});

				feed.run();
			}
		};
	}
})();; 
"use strict";

(function() {
    angular
        .module("Website")
        .directive("lstMenuButton", Directive);

    function Directive() {
        return {
            restrict: "E",
            templateUrl: "./dist/templates/components/menu-button/menu-button.template.html",
            transclude: true,
            replace: true,
            link: function($scope){
                console.log($scope);
                
                $scope.openMenu = function(){
                    var $overlay = $("<div></div>");
                    $overlay.css({
                        "position": "fixed",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "background": "rgba(0, 0, 0, .8)"
                    });
                    
                    $("body").css({
                        "overflow": "hidden"
                    });

                    $("body").append($overlay);
                };
            }
        };
    }
})();; 
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
				featured: "@"
			}
		};
	}
})();; 
"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstResponsiveMenu", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/responsive-menu/responsive-menu.template.html",
			transclude: true,
			replace: true,
			scope: {
				links: "="
			},
			link: function($scope){
				$scope.openMenu = function(){
					
				}
			}
		};
	}
})();; 
"use strict";

(function(){
	angular
		.module("Website")
		.controller("InstaThumbsController", ["$scope", "$http", Controller]);

	function Controller($scope, $http){}
})();
