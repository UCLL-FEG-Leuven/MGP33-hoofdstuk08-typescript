import { Color } from "./color.js";

export interface ICar {
    get id(): number;
    get brand(): string;
    get color(): Color;
    get maxSpeed(): number;

    renderInList(listElement: HTMLElement) : void;
    renderOnConsole() : void;
}