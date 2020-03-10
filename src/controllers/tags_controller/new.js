todoApp.controller('tagsNewCtrl',  ['$scope', '$http', '$location', function ($scope, $http, $location) {

    /* Initial tag */
    $scope.tag = {"tag": {}};

    /* Create new tag */
    $scope.addTag = function () {
        $http.post('http://localhost:3001/api/v1/tags.json', $scope.tag)
            .success(function (result) {
                $location.path('/')
            })
    }
}]);