import { Car } from "./car.js";
import { Color } from "./color.js";
import { ICar } from "./icar.js";

let cars: Array<ICar> = [];

cars.push(new Car("Volkswagen", Color.Blue, 180));
cars.push({
    get id() { return 1; },
    get brand() { return "Audi"; },
    get color() { return Color.Red; },
    get maxSpeed() { return 220; },
    renderInList(listElement: HTMLElement) { listElement.insertAdjacentHTML("beforeend", "<li>Dit is een Audi.</li>") },
    renderOnConsole() { console.log(`Dit is een Audi.`); }
});
// Het onderstaande lukt niet want id() moet een number teruggeven en er ontbreken nog 3 andere getters.
// cars.push({
//     get id() { return "2"}
// });

const listElement = document.querySelector("ol")!; // Met '!' geven we aan dat het resultat van deze querySelector nooit 'null' zal zijn.

cars.forEach(c => {
    c.renderInList(listElement);
    c.renderOnConsole();
})