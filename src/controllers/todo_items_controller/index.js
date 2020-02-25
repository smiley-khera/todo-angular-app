todoApp.controller('itemsIndexCtrl', ['$scope','$log','$http', function ($scope, $log, $http) {
    $http.get('http://localhost:3001/api/v1/todo_items.json?page=1')
        .success(function (result) {
            $scope.todoItems = result;
            $scope.pageTitle = "Todo Items"
        })
}]);
