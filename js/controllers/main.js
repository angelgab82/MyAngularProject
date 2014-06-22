/**
 * Created by Gabriel on 6/6/2014.
 */
'use strict';
(function () {
    var app = angular.module("githubViewer");
    var MainCtrl = function ($scope, $interval, $location) {
        //Decrement the count down
        var decrementCountDown = function () {
            $scope.countdown--;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };
        //Start the count down
        var countDownInterval = null;
        var startCountDown = function () {
            //Using the interval service
            countDownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
        };

        //Search the api with a specific username
        $scope.search = function (username) {
            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };

        //Values in the page
        $scope.username = "angular";
        $scope.countdown = 5;
        startCountDown();
    };
    //Make sure all the functions are in the controller here, or just add the MainCtrl
    app.controller("MainCtrl", ["$scope", "$interval", "$location", MainCtrl]);
}());