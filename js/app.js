/**
 * Created by Gabriel on 6/7/2014.
 */
'use strict';
(function () {
    var app = angular.module("githubViewer", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider.when("/main", {
            templateUrl: "view/main.html",
            controller: "MainCtrl"
        })
            .when("/user/:username", {
                templateUrl: "view/user.html",
                controller: "UserCtrl"
            }).when("/repo/:username/:reponame", {
                templateUrl: "view/repo.html",
                controller: "RepoCtrl"
            })
            .otherwise({redirectTo: "/main"});
    });
}());