// parent product class
class Product {
    name: string;
    price?: number = 5000;
    category?: string;
    
    constructor(name: string, price?: number, category?: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    printDetails() {
        if (this.category != undefined) {
        console.log(`Name: ${this.name}, Price: ${this.price}, ` +
        `Category: ${this.category}`);
        } else {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
        }
}
// new child class
class DiscountProduct extends Product {
    constructor(name: string, price: number, private discount: number) {
    super(name, price - discount);
    }
}
// object creation
let hat = new DiscountProduct("Hat", 500, 50);
let boots = new Product("Boots", 100, "Snow Gear");
hat.printDetails();
boots.printDetails();

