import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Subscription } from 'rxjs';
import { Car } from '../shared/component/models/car.model';
import { CartService } from '../shared/services/cart.service';
import { HeaderComponent } from '../shared/component/header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  carsData: Car[];
  carsPageAmount: number = 10;
  currentPage: number = 1;
  editCar: Car = new Car();
  isLoaded: boolean = false;

  @ViewChild(HeaderComponent) header: HeaderComponent;

  constructor(
    private carService: CarService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.sub1 = this.carService.getCars().subscribe((data: Car[]) => {
      this.carsData = data;
      this.carsData.reverse();
      this.isLoaded = true;
    });
  }

  renderPage(): Car[] {
    let firstIndex = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.carsPageAmount;
    let secondIndex = firstIndex + this.carsPageAmount;
    return this.carsData.slice(firstIndex, secondIndex);
  }

  onChangeCurrentPage(data) {
    this.currentPage = data
  }
  setEditCar(car) {
    this.editCar = Object.assign({}, car);
  }

  onEditCar() {
    this.sub2 = this.carService.editCars(this.editCar).subscribe(() => {
      this.ngOnInit();
    });
  }

  onDeleteCar() {
    this.sub3 = this.carService.deleteCars(this.editCar.id).subscribe(() => {
      this.ngOnInit();
    });
  }
  onAddToCart(car: Car) {
    this.sub4 = this.cartService.addToCart(car).subscribe(() => {
      this.header.ngOnInit()
    })
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
    if (this.sub2) this.sub1.unsubscribe();
    if (this.sub3) this.sub1.unsubscribe();
    if (this.sub4) this.sub1.unsubscribe();
  }
}