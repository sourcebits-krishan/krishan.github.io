/*================================================================
App ceb
==================================================================*/
'use strict';
angular.module('ceb', ['ui.router','ui.bootstrap','ngAnimate','duScroll'])

.config(['$stateProvider', "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/question");
    $stateProvider
        .state('question', {
            url: "/question",
            templateUrl: "partials/question.html"
        })
        .state('complete',{
        	url:"/complete",
        	templateUrl:"partials/complete.html"
        })
}]);
angular.module('ceb')
.value('duScrollDuration', 1000)
  .value('duScrollOffset', 1000)