window.addEventListener("load",doAjax);
function doAjax(){
    if(!localStorage.mydata){
    var serverUrl = "http://localhost:4444/itemdetails";
    fetch(serverUrl).then(done).catch(fail);
    }
    else{
        printData(JSON.parse(localStorage.mydata));
    }
}
function done(response){
    
    response.json().then(printData);
}

function addToCart(){
    console.log("Add to Cart Call");
}



function fail(error){
    console.log("Error is ",error);

}