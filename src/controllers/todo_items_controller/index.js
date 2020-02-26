todoApp.controller('itemsIndexCtrl', ['$scope', '$log', '$http', '$location', function ($scope, $log, $http, $location) {

    /* Fetch all to-do items*/
    $scope.fetchTodoItems = function () {
        $http.get('http://localhost:3001/api/v1/todo_items.json?page=1')
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

