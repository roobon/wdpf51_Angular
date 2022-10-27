class Product { //class start
    name: string
    price: number
    category?: string
    
    constructor(name: string, price: number, category?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
    }
    
   } // class end
   let hat = new Product("Hat", 100);
   let boots = new Product("Boots", 100, "Snow Gear");
   function printDetails(product : { name: string, price: number, category?: string}) {
    if (product.category != undefined) {
    console.log(`Name: ${product.name}, Price: ${product.price}, ` +
    `Category: ${product.category}`);
    } else {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
   }
   printDetails(hat);
   printDetails(boots);