todoApp.controller('itemsIndexCtrl', ['$scope', '$log', '$http', '$location','$routeParams', function ($scope, $log, $http, $location, $routeParams) {

    /* Fetch all to-do items*/
    $scope.fetchTodoItems = function () {
        let url = (!$routeParams.id)
            ? 'http://localhost:3001/api/v1/todo_items.json'
            : 'http://localhost:3001/api/v1/tags/' + $routeParams.id + '/todo_items.json';

        $http.get(url)
            .success(function (result) {
                $scope.todoItems = result;
                $scope.pageTitle = "Todo Items";
            })
    };

    $scope.fetchTodoItems();

    /* Delete To-do item*/
    $scope.deleteTodo = function (todo) {
        $http.delete('http://localhost:3001/api/v1/todo_items/' + todo + '.json')
            .success(function (result) {
                let deletedItem = $scope.todoItems.
                                         findIndex(item => item.todo_item.id.$oid === todo);
                $scope.todoItems.splice(deletedItem, 1);
            })
    }
}]);

