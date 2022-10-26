function writeValue(val: string = "Dhaka") {
    console.log(`Value: ${val ?? "Fallback value"}`)
}
   
writeValue("Rangpur");
writeValue();