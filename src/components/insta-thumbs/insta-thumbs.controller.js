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
