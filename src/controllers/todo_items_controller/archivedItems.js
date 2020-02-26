todoApp.controller('archivedItemsCtrl', ['$scope', '$log', '$http', function ($scope, $log, $http) {

    /* Function to fetch all Archived to-do Items*/
    $scope.fetchArchivedTodoItems = function () {
        $http.get('http://localhost:3001/api/v1/todo_items/archive.json')
            .success(function (result) {
                $scope.todoItems = result;
                $scope.pageTitle = "Archived Todo Items";
            })
    };

    /* Call a function to fetch to-do items */
    $scope.fetchArchivedTodoItems();

    /* Restore to-do Item*/
    $scope.restoreTodo = function (todo) {
        $http.patch('http://localhost:3001/api/v1/todo_items/' + todo + '/restore.json')
            .success(function (result) {
                let restoredItem = $scope.todoItems.
                                        findIndex(item => item.todo_item.id.$oid === todo);
                $scope.todoItems.splice(restoredItem, 1);
            })
    }

}]);
