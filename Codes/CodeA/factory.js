app.service("myservice",function($http, $q,LOCALURL)  {
//app.factory("myfactory", ($http, $q,LOCALURL) => {
    const object = {
        talkToServer(s) {
            var pr = $q.defer();
            console.log("SERVER CALL FACTORY ");
           // var url = "http://localhost:4000/items";
            $http.get(LOCALURL).then(success, fail);

            function success(data) {
                console.log("SUCCESS ", data);
                pr.resolve(data);
                //s.result = data;
                //return data;
            }

            function fail(error) {
                pr.reject(error);
                //return error;
            }
            // offers, discount, coupons
            return pr.promise;
        }
    };
    this.obj = object;
    //return object;
})