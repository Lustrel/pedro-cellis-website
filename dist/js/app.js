"use strict";

angular
    .module("Website", ["ngRoute"])
    .config(function($routeProvider, $httpProvider){
        var templatesPath = "./dist/templates/pages";

        // Routes configuration
        $routeProvider
            .when("/", { templateUrl: (templatesPath + "/home/home.template.html") });
    });