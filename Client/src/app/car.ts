export class Car {
    static #lastId:number = 0;

    #id: number;
    #brand: string;
    #color: string;
    #maxSpeed: number;

    #started;
    #gear;
    #acceleratorPedalPosition;
    #brakePedalPosition;

    constructor(brand:string, color:string, maxSpeed:number) {
        this.#id = Car.#lastId++;
        this.#brand = brand;
        this.#color = color;
        this.#maxSpeed = maxSpeed;

        this.#started = false;
        this.#gear = 0;
        this.#acceleratorPedalPosition = 0;
        this.#brakePedalPosition = 0;
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get started() { return this.#started; }
    get gear() { return this.#gear; }
    get acceleratorPedalPosition() { return this.#acceleratorPedalPosition; }
    set acceleratorPedalPosition(newValue) {
        if (newValue < 0 || newValue > 1)
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#acceleratorPedalPosition = newValue;
    }
    get brakePedalPosition() { return this.#brakePedalPosition; }
    set brakePedalPosition(newValue) {
        if (newValue < 0 || newValue > 1)
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#brakePedalPosition = newValue;
    }

    start() {
        this.#started = true;
        console.log(`${this.#brand} with ID ${this.id} started.`);
    }

    stop() {
        this.#started = false;
        console.log(`${this.#brand} with ID ${this.id} stopped.`);
    }

    gearUp() {
        this.#gear++;
        console.log(`Gear up. Gear position of ${this.#brand} with ID ${this.id} is now ${this.gear}.`);
    }

    gearDown() {
        this.#gear--;
        console.log(`Gear down. Gear position of ${this.#brand} with ID ${this.id} is ${this.gear}.`);
    }

    move() {
        if (this.#started) {
            console.log(`Moving ${this.#brand} with ID ${this.id}: gear=${this.gear}, accelerator (%)=${this.#acceleratorPedalPosition * 100}, brake (%)=${this.#brakePedalPosition * 100}.`);
        } else {
            console.log(`${this.#brand} with ID ${this.id} is not started.`);
        }
    }
}