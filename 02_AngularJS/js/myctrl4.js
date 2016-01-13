/**
 * Created 4_AngularJS 进阶-在 $scope 中变量和方法的使用-myctrl2.js by fairy on 2016/1/13.
 */

angular.module('app',[])
.controller('MyCtrl',function($scope){
        $scope.msg = '';
        $scope.user = {uname:'' , pwd:''};
        $scope.errormsg = '';

        $scope.reverse = function(){
            return $scope.msg.split("").reverse().join("");
        }

        $scope.login = function(){
            if($scope.user.uname=='admin' && $scope.user.pwd=='123'){
                alert('登陆成功');
            }else{
                $scope.errormsg='用户名错误或密码错误';
            }
        }
    })