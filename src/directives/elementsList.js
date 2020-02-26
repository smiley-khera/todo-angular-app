todoApp.directive("elementsList", function() {
    return {
        restrict: 'AE',
        templateUrl: '../src/views/templates/elementsList.html',
        replace: false,
        scope: {
            pageTitle: "@",
            elements: "=",
            itemButtonText: "@",
            deleteOrRestoreAction: "&"
        }
    }
});