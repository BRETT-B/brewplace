// Custom directive for animated menu
brewApp.directive('offCanvasMenu', function () {
    return {
        // this directive returns an attribute
        restrict: 'A',
        replace: false,
        // using link instead of a controller to manipulate the DOM
        link: function (scope, element) {
            // Creates a "switch" for the menu to toggle on an off:
            scope.isMenuOpen = false;
            scope.toggleMenu = function() {
                scope.isMenuOpen = !scope.isMenuOpen;
                    // condition to remove the array from the view
                if(!scope.isMenuOpen){ 
                    scope.beers = [];
                    scope.chosenBrewery = "";    
                }
            };
        }
    };
});