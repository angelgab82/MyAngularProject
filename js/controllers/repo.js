/**
 * Created by Gabriel on 6/7/2014.
 */
'use strict';
(function () {
    var app = angular.module("githubViewer");
    var RepoCtrl = function ($scope, $routeParams, githubService) {

        var onRepo = function(data){
          $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = reason;
        };

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        githubService.getRepoDetails(username,reponame).then(onRepo, onError);


    };
    //Make sure all the functions are in the controller here, or just add the MainCtrl
    app.controller("RepoCtrl", RepoCtrl);
}());