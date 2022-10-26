function writeValue(val: string, ...extraInfo: (number | string)[]) {
    console.log(`Value: ${val}, Extras: ${extraInfo}`)
}
   
writeValue("London", "Raining", "Cold");
writeValue("Paris", "Sunny");
writeValue("New York");
writeValue("Dhaka", "Rainy", "Cold", 20);