app.controller("homeCtrl",function($scope){
    $scope.msg = "Welcome to the Home Page";
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;

    $scope.add=function(){
        return $scope.firstNumber + $scope.secondNumber;
    }
});