/**
 * Created by Gabriel on 6/7/2014.
 */
'use strict';
(function () {
    var app = angular.module("githubViewer");
    var UserCtrl = function ($scope, githubService, $routeParams) {
        //Accepted calls
        var onUserComplete = function (data) {
            $scope.user = data;
            githubService.getRepos($scope.user).then(onRepositoryReturn, onError);
        };
        //When the repository are ready to be fetched to the page
        var onRepositoryReturn = function (data) {
            $scope.repos = data;
        };

        //Error
        var onError = function (reason) {
            $scope.error = "Could not fetch the user! " + reason;
        };

        //Values in the page
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        githubService.getUser($scope.username).then(onUserComplete,onError);
    };
    //Make sure all the functions are in the controller here, or just add the MainCtrl
    app.controller("UserCtrl", ["$scope", "githubService", "$routeParams", UserCtrl]);
}());