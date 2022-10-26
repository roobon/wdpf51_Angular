function writeValue(val: number | null | string = 50) {
    console.log(`Value: ${val || "Fallback value"}`)
   }
   
   writeValue(10);
   writeValue("");
   