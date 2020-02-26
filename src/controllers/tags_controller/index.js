todoApp.controller('tagsIndexCtrl', ['$scope', '$location', '$log', '$http', function ($scope, $location, $log, $http) {
    $scope.$location = $location;

    /*Function to fetch all tags*/
    $scope.fetchTags = function () {
        $http.get('http://localhost:3001/api/v1/tags.json')
            .success(function (result) {
                $scope.tags = result
            })
    };

    /*Function call to fetch tags*/
    $scope.fetchTags();

    /*Function to delete tag*/
    $scope.deleteTag = function (tag) {
        $http.delete('http://localhost:3001/api/v1/tags/' + tag + '.json')
            .success(function (result) {
                let deletedTag = $scope.tags.findIndex(item => item.tag.id.$oid === tag);
                $scope.tags.splice(deletedTag, 1);
            })
    };
}]);