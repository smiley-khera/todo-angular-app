todoApp.controller('itemsEditCtrl',
    ['$scope', '$http', '$routeParams','$location',
        function ($scope, $http, $routeParams, $location) {

            /* Fetch selected to-do item*/
            $scope.editTodoItem = function (id) {
                $http.get('http://localhost:3001/api/v1/todo_items/' + id + '.json')
                    .success(function (result) {
                        $scope.todoItem = result;
                    })
            };

            /*Function call to edit to-do item */
            $scope.editTodoItem($routeParams.id);

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

            /*Function to update todo item*/
            $scope.updateTodo = function () {
                let body = formatTodoBody($scope.todoItem.todo_item);
                $http.patch('http://localhost:3001/api/v1/todo_items/' + $scope.todoItem.todo_item.id.$oid + '.json', body)
                    .success(function (result) {
                       $location.path('todo_items');
                    })
            }
        }
    ]);

/*Local functions*/
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

