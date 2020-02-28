//Routes
todoApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'src/views/tags/index.html',
            controller: 'tagsIndexCtrl'
        })

        .when('/todo_items', {
            templateUrl: 'src/views/todo_items/index.html',
            controller: 'itemsIndexCtrl'
        })

        .when('/archived_items', {
            templateUrl: 'src/views/todo_items/archivedTodoItems.html',
            controller: 'archivedItemsCtrl'
        })

        .when('/tags/:id/todo_items', {
            templateUrl: 'src/views/todo_items/index.html',
            controller: 'itemsIndexCtrl'
        })

        .when('/todo_items/:id/edit', {
            templateUrl: 'src/views/todo_items/edit.html',
            controller: 'itemsEditCtrl'
        })
});
