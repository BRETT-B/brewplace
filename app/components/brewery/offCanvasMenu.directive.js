brewApp.directive('offCanvasMenu', function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
            scope.isMenuOpen = false;
            scope.toggleMenu = function() {
                scope.isMenuOpen = !scope.isMenuOpen;
                if(!scope.isMenuOpen){ 
                    scope.beers = [];
                    scope.chosenBrewery = "";    
                }
            };
        }
    };
});