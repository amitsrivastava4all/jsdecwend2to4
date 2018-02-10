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
    searchByPrice(price){
        return this.itemList.filter(itemObject=>itemObject.price ==price);
    },

    sort(sortBy){
        return this.itemList.sort((first,second)=>{
            var secondVal = second[sortBy];
            var firstVal = first[sortBy];
            return second[sortBy] - first[sortBy];
        });
    }
}