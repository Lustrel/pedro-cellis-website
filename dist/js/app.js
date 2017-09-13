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
			replace: true
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

(function(){
	angular
		.module("Website")
		.controller("InstaThumbsController", ["$scope", "$http", Controller]);

	function Controller($scope, $http){
		$scope.images = [];
		
		(function initialize(){
			var userid = "421923937";
			var token = "421923937.79e9056.37423ea58231407699f4980815c4cf5c";
			$.ajax({
				url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
				dataType: 'jsonp',
				type: 'GET',
				data: {access_token: token, count: 5},
				success: function(data){
					data.data.forEach(function(picture){
						$scope.images.push(picture);
					});
				},
				error: function(data){
					console.log(data); // send the error notifications to console
				}
			});
		})();
	}
})();
