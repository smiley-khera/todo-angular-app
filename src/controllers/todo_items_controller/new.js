todoApp.controller('itemsNewCtrl', ['$scope', '$http','$location', function ($scope, $http, $location) {

    /*Initial to-do item*/
    $scope.todoItem = {"todo_item": {"status": "Started"}};

    /*function to fetch All tags*/
    $scope.fetchTags = function(){
        var tags = [];
        $http.get('http://localhost:3001/api/v1/tags.json')
            .success(function (result) {
                angular.forEach(result, function (item) {
                    tags.push({id: item.tag.id.$oid, name: item.tag.name})
                });
                $scope.tags = tags;
            })
    };

    /*Function call to fetch tags*/
    $scope.fetchTags();

    $scope.addTodo = function () {
        let body = formatTodoBody($scope.todoItem.todo_item);
        $http.post('http://localhost:3001/api/v1/todo_items.json', body)
            .success(function (result) {
               $location.path('todo_items')
            })
    }
}]);

/*Local function to format to-do item request body*/
function formatTodoBody(todo) {
    return (
        {
            "todo_item": {
                "title": todo.title,
                "description": todo.description,
                "status": todo.status,
                "tag_ids": todo.tags
            }
        }
    )
}
