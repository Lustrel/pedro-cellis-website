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
})();