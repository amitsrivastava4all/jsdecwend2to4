app.controller("myctrl", ($scope, myservice) => {
    $scope.addToCart = (id) => {
        console.log("Id is ", id);

    }
    $scope.load = () => {
        console.log("Load CALL CTRL ");
        var pr = myservice.obj.talkToServer($scope);
        console.log("DATA SET CTRL ");
        for (let i = 1; i <= 10; i++) {
            console.log("TimePass", i);
        }
        pr.then(function(data) {
            $scope.result = data;
        }, function(err) {
            $scope.error = err;
        })
    }
});