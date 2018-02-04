window.addEventListener("load",doAjax);
function doAjax(){
    var serverUrl = "http://localhost:4444/itemdetails";
    fetch(serverUrl).then(done).catch(fail);
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