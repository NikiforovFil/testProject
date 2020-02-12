import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Subscription } from 'rxjs';
import { Car } from '../shared/component/models/car.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  s1: Subscription;
  carsData: Car[];
  carsPageAmount: number = 10;
  currentPage: number = 1;
  isLoaded: boolean = false;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.s1 = this.carService.getCars().subscribe((data: Car[]) => {
      this.carsData = data;
      this.isLoaded = true;
    });
  }

  renderPage(): Car[] {
    let firstIndex = this.currentPage === 1 ? 0 : this.currentPage * this.carsPageAmount;
    let secondIndex = firstIndex + this.carsPageAmount;
    return this.carsData.slice(firstIndex, secondIndex);
  }

  onChangeCurrentPage(data) {
    this.currentPage = data
    console.log(data)
    this.carsData.slice(0, 30).map(el => {
      console.log(el.Name)

    })
  }
  onEditCar(i) {
    let globalIndex = i + (this.currentPage - 1) * this.carsPageAmount;
    console.log(globalIndex)
    console.log(this.carsData[globalIndex].Name)
  }

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }
}