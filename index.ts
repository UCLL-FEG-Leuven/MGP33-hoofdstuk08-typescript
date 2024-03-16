import { Car } from "./car";
import { Color } from "./color";
import { ICar } from "./icar";

let cars: Array<ICar> = [];

cars.push(new Car("Volkswagen", Color.Blue, 180));
cars.push({
    get id() { return 1; },
    get brand() { return "Audi"; },
    get color() { return Color.Red; },
    get maxSpeed() { return 220; }
});
// Het onderstaande lukt niet want id() moet een number teruggeven en er ontbreken nog 3 andere getters.
// cars.push({
//     get id() { return "2"}
// });

cars.forEach(c => {
    console.log(c.brand);
})