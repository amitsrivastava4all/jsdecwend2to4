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
    console.log("Data is ",data);
    itemOperations.itemList = data;
    var div = document.querySelector("#result");
    itemOperations.itemList.forEach((itemObject)=>{
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



