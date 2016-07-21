/*================================================================
App ceb
==================================================================*/
'use strict';
angular.module('ceb', ['ui.router','ui.bootstrap','ngAnimate'])

.config(['$stateProvider', "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/question");
    $stateProvider
        .state('question', {
            url: "/question",
            templateUrl: "partials/question.html"
        })
}]);
