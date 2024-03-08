import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './car';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cars: Array<Car> = [];

  constructor() {
    this.cars.push(new Car('VW', 'blue', 180));
    this.cars.push(new Car('Renault', 'white', 150));
  }
}
