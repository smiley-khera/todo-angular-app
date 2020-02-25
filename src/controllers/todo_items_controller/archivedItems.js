todoApp.controller('archivedItemsCtrl', ['$scope','$log','$http', function ($scope, $log, $http) {
    $http.get('http://localhost:3001/api/v1/todo_items/archive.json')
        .success(function (result) {
            $scope.todoItems = result;
            $scope.pageTitle = "Archived Todo Items"
        })
}]);
