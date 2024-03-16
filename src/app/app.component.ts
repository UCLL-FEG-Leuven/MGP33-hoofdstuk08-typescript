import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ICar } from './models/icar.js';
import { Color } from './models/color.js';
import { Car } from './models/car.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cars: Array<ICar> = [];

  constructor() {
    this.cars.push(new Car("Volkswagen", Color.White, 180));
  }
}
