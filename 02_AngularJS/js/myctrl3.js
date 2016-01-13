/**
 * Created 3_AngularJS 进阶-Controllers 的使用-myctrl3.js by fairy on 2016/1/13.
 */

angular.module('app',[])
    .controller('FirstCtrl',function($scope){
        $scope.msg = 'hello angular';
    })
    .controller('NextCtrl',function($scope){})
