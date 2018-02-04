class Item{
    constructor(id, name, price, quantity, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.url = image;
        this.addToCart= false;
        this.outOfStock = false;

    }
}