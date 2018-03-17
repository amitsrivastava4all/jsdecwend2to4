const itemOperations = {
    itemArray :[],
    search(id){ 
       return  this.itemArray.filter(itemObject=>itemObject.id==id)[0];
    },
    prepareItems(items){
        for(let item of items){
            var obj = new Item(item.id, item.name, item.price, item.like);
            this.itemArray.push(obj);
        }
    },
    update(itemObject){
        itemObject.incrementLike();
    },
    getItems(){
        return this.itemArray;
    }
}