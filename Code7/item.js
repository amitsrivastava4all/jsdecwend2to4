class Item{
    constructor(id, name ,price, like){
        this.id = id;
        this.name = name;
        this.price = price;
        this.like = like;
    }
    incrementLike(){
        this.like++;
    }
}