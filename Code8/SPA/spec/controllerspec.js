describe("Build Test Suite for Home Controller",function(){
    beforeEach(module("spaapp"));  // ng-app
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;  // ng-controller
    }));
    
    it("should add two number",function(){
        var myscope ={};
        var controller = $controller('homeCtrl', { $scope: myscope });
        myscope.firstNumber = 100;
        myscope.secondNumber = 200;
        var result = myscope.add();
        expect(result).toBe(300);
    });

    it("should contain welcome in msg",function(){
        var myscope ={};
        var controller = $controller('homeCtrl', { $scope: myscope });
        expect(myscope.msg).toBe("Welcome to the Home Page");

});
});