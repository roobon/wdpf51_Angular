import { Name, WeatherLocation } from "./modules/NameAndWeather";

let name = new Name("Dipu", "Number one");
let loc = new WeatherLocation("raining", "Dhaka");

console.log(name.nameMessage);
console.log(loc.weatherMessage);