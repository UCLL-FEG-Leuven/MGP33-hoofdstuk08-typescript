import { Color } from "./color.js";
import { ICar } from "./icar.js";

export class Car implements ICar {
    static #lastId: number = 0;

    #id: number;
    #brand: string;
    #color: Color;
    #maxSpeed: number;

    constructor(brand: string, color: Color, maxSpeed: number) {
        this.#id = Car.#lastId++;
        this.#brand = brand;
        this.#color = color;
        this.#maxSpeed = maxSpeed;
    }

    get id(): number {
        return this.#id;
    }
    get brand(): string {
        return this.#brand;
    }
    get color(): Color {
        return this.#color;
    }
    get maxSpeed(): number {
        return this.#maxSpeed;
    }
}