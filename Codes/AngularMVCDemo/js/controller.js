// app.controller("myctrl", mycontroller);

//         function mycontroller($scope, myfactory) {
//             console.log("Controller Loaded...", myfactory);
//             $scope.showName = function() {
//                 var result = myfactory.initcap($scope.firstname);
//                 $scope.resultname = result;
//                 //console.log("Hello ...." + $scope.firstname);
//             }
//             $scope.sayHello = function() {
//                 $scope.resultname = "Hello " + $scope.firstname;
//             }
//         }

app.controller("myctrl",($scope,myfactory)=>{
    $scope.showName = function() {
                        var result = myfactory.initcap($scope.firstname);
                        $scope.resultname = result;
                        //console.log("Hello ...." + $scope.firstname);
                    }
                    $scope.sayHello = function() {
                        $scope.resultname = "Hello " + $scope.firstname;
                    }
})