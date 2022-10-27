export class Name {
    constructor(public first: string, public second: string) {}
    
     nameMessage() {
    return `Hello ${this.first} ${this.second}`;
    }
   }
export class WeatherLocation {
    constructor(public weather: string, public city: string) {}
    
    get weatherMessage() {
    return `It is ${this.weather} in ${this.city}`;
    }
}