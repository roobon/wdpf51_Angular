class Product {
    constructor(name: string, price: number, category?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
    }
    name: string
    price: number
    category?: string
    printDetails() {
    if (this.category != undefined) {
    console.log(`Name: ${this.name}, Price: ${this.price}, ` +
    `Category: ${this.category}`);
    } else {
    console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
    }
   }

  let shirt = new Product("Shirt", 100, "black");

  shirt.printDetails();