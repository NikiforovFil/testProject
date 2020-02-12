import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Subscription } from 'rxjs';
import { Car } from '../shared/component/models/car.model';
import { FormsModule, ReactiveFormsModule, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  carsData: Car[];
  carsPageAmount: number = 10;
  currentPage: number = 1;
  editCar: Car = new Car();
  isLoaded: boolean = false;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.sub1 = this.carService.getCars().subscribe((data: Car[]) => {
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
    this.carsData.slice(0, 30).map(el => {
      console.log(el.Name)

    })
  }

  onEditCar() {
    this.sub2 = this.carService.editCars(this.editCar).subscribe();
  }

  onDeleteCar() {
    this.sub3 = this.carService.deleteCars(this.editCar).subscribe();
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
    if (this.sub2) this.sub1.unsubscribe();
    if (this.sub3) this.sub1.unsubscribe();
  }
}