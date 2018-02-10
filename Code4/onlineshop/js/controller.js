window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#searchByPrice").addEventListener("change",doSearch);
    document.querySelector("#sort").addEventListener("change",doSort);
}

function doSort(){
    var sortBy = document.querySelector("#sort").value;
    var items = itemOperations.sort(sortBy);
    printData(items);
}

function doSearch(){
    if(this.value.trim().length>0){
    var price = this.value;
    var filterItems = itemOperations.searchByPrice(price);
    printData(filterItems);
    }
    else{
        printData(itemOperations.itemList);
    }
}

function addToCart(){
    console.log("Add to cart call ",this.getAttribute("itemid"));
    var itemId = parseInt(this.getAttribute("itemid"));
    var subArray = itemOperations.search(itemId);
    if(!subArray.length==0){
        subArray[0].addToCart = true;
    }
   
    var span = document.createElement("span");
    span.innerHTML = " (Item in Cart) ";
    this.appendChild(span);
    this.setAttribute("disabled",true);
}


function printData(data){
    console.log("Data is ",data.length);
    var temp = data;
    var div = document.querySelector("#result");
    div.innerHTML = "";
    if(itemOperations.itemList.length==0){
        itemOperations.itemList = data;
    }
    temp.forEach((itemObject)=>{
    var para = document.createElement("p");
        // para.innerHTML ="<img class='size' src='"+itemObject.url+"'>"+ data[i].id +" "+data[i].name +" "+data[i].price;
    para.innerHTML = `<img class='size' src='${itemObject.url}'> ${itemObject.id} ${itemObject.name} ${itemObject.price}`;
             var button = document.createElement("button");
           button.innerHTML = "Add to Cart";
           button.setAttribute("itemid",itemObject.id);
            button.addEventListener("click",addToCart);

         div.appendChild(para);
         div.appendChild(button);
    });
    //
    // for(let i= 0 ; i<data.length; i++){
    
    // }

}



