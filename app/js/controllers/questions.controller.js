/* -------------------
QUESTIONS CONTROLLER 
----------------------*/
'use strict';
angular
    .module('ceb')
    .controller('questionController', questionController);

// TIMER DEMO


function questionController($scope, $http, $log, $document) {

    var vm = this;
    vm.open = false;
    vm.tab = true;
    vm.questionProgressPercent = 0;
    var someElement = angular.element(document.getElementById('sticky'));
    vm.openOptions = function() {
        //    if (e.target !== this)
        // return;

        vm.open = true;
    }
    vm.closeOptions = function() {

        //    if (e.target !== this)
        // return;
        vm.open = false;
    }


    $http.get("images/data/testdata.json")
        .then(function(response) {

            vm.test = response.data;
            vm.test.set = 0;
            vm.test.questions = vm.test.sets[0].questions;
            vm.test.currentQuestion = vm.test.questions[0];
            vm.sectionQuestions = vm.test.questions.length;
            vm.currnetQuestionIndex = 0;
            vm.setsMaxIndex = vm.test.sets.length - 1;
            vm.currentQuestionNum =  1;
            console.log(vm.test);
            calcQuestioPercent();
        });


        $http.get("images/data/sampleQ.json")
        .then(function(response) {

            $scope.sampletest = response.data;
            
            $scope.samplequestion = $scope.sampletest.question;
            $scope.sampleoption = $scope.sampletest.options;
           
           
            
            console.log($scope.sampletest);
            console.log($scope.sampletest.question);
             console.log($scope.sampletest.options[1]);
           
        });

       

        $scope.check=false;
  console.log($scope.check);
      
    $scope.startEvaluation = function() {
    $scope.check=true;
    
    console.log($scope.check);
};



    vm.showNextQuestion = function() {

        if (vm.currnetQuestionIndex < vm.sectionQuestions - 1) {
            vm.currnetQuestionIndex += 1;
            vm.test.currentQuestion = vm.test.questions[vm.currnetQuestionIndex];
             vm.currentQuestionNum +=  1;
        } else if ((vm.currnetQuestionIndex < vm.sectionQuestions - 1) || vm.test.set < vm.setsMaxIndex

        ) {
            vm.test.set += 1;
            vm.test.questions = vm.test.sets[vm.test.set].questions;
            vm.test.currentQuestion = vm.test.questions[0];
            vm.sectionQuestions = vm.test.questions.length;
            vm.currnetQuestionIndex = 0;
              vm.currentQuestionNum +=  1;
            calcQuestioPercent();
        }
        calcQuestioPercent();
        $document.scrollToElementAnimated(someElement);
    }

    function calcQuestioPercent() {
        (vm.currentQuestionNum == vm.test.totalQuestions) ? vm.questionProgressPercent=100 : vm.questionProgressPercent = ((vm.currentQuestionNum-1) * 100) / vm.test.totalQuestions;
    }

    function startTimer(duration) {
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            vm.display = minutes + ":" + seconds;
            vm.percent = (timer * 100) / duration;
            $scope.$apply();
            // console.log(  vm.display);
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    var timeLimit = 60 * 10;
    startTimer(timeLimit);

}
/* -------------------
QUESTIONS CONTROLLER END
----------------------*/
