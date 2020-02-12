import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  carsData;
  carsAmount: Number = 10;
  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.carsData = this.carService.getCars(this.carsAmount);

    console.log(this.carsData)
  }


}
