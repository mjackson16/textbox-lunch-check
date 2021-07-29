(function () {
    'use strict';

    angular
        .module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = '';
        $scope.message;
        $scope.textStyle;
        $scope.comment = 'Empty items are not being considered towards the count'

        $scope.checkList = function () {            
            $scope.splitLunchArray = $scope.lunchList.replaceAll(' ', '').split(',');
            $scope.filteredArray = $scope.splitLunchArray.filter(function(el){
                return el != '';
            });
            
            if ($scope.lunchList == '' || $scope.filteredArray.length == 0) {
                $scope.message = 'Please enter data first';
                $scope.textStyle = 'data-first';
            } else if ($scope.filteredArray.length <= 3) {
                $scope.message = 'Enjoy!';
                $scope.textStyle = 'enjoy';
            } else {
                $scope.message = 'Too much!';
                $scope.textStyle = 'too-much';
            }
        }

    }
})();
