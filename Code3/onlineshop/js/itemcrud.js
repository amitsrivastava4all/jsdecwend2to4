const itemOperations = {
    itemList:[],
    add(){
        
    },
    delete(){

    },
    search(itemId){
        var subArray = this.itemList.filter(y=>y.id==itemId);
        return subArray;
    },
    sort(){

    }
}