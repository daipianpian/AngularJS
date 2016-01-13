/**
 * Created 03_AngularJS 进阶- Services 与指令的使用-自定义 Services 服务-app1.js by fairy on 2016/1/13.
 */

angular.module('app',[])
.value('realname','zhaoliu')
.value('realname','wangwu') //是可以改变的
.constant('http',"http://www.xxx")
.constant('http',"www.sohu.com")
.factory('Data',function(){
    return {
        msg:'你好啊',
        setMsg:function(){
            this.msg='我不好';
        }
    }
})

.service('User',function(){
        this.firstname = "上官";
        this.lastname = "飞燕";
        this.getName = function(){
            return this.firstname+this.lastname;
        }
    })
.controller('MyCtrl',function($scope,realname,http,Data,User){
    $scope.msg = '你好';
    $scope.realname = realname;
    $scope.http = http;
    $scope.data = Data;
    Data.setMsg();
        $scope.uname=User.getName();
})