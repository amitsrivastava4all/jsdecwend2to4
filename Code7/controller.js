app.controller("myctrl", ($scope, myservice) => {
    $scope.addToCart = (id) => {
        console.log("Id is ", id);

    }
    $scope.like= (id)=>{
        var object = itemOperations.search(id);
        itemOperations.update(object);
        $scope.result = itemOperations.getItems();

    }
    $scope.load = () => {
        console.log("Load CALL CTRL ");
        var pr = myservice.obj.talkToServer($scope);
        console.log("DATA SET CTRL ");
        for (let i = 1; i <= 10; i++) {
            console.log("TimePass", i);
        }
        pr.then(function(data) {
            $scope.result = data.data;
            
            itemOperations.prepareItems($scope.result);
        }, function(err) {
            $scope.error = err;
        })
    }
});