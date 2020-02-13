import { Component, Input, EventEmitter, Output, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../../services/car.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() currentPage: number;
  @Input() carsPageAmount: number;

  @Output() newCurrentPage = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter();

  sub: Subscription;
  sub1: Subscription;
  sub2: Subscription;
  sortType: String = 'Actual';
  addCar: Car = new Car();
  cart: Car[] = [];

  constructor(
    private carService: CarService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.sub1 = this.cartService.getCart().subscribe((data: Car[]) => {
      this.cart = data;
    })
  }
  setSortType(data): void {
    this.sortType = data;
  }

  nextPage() {
    this.currentPage++;
    this.newCurrentPage.emit(this.currentPage);
  }
  prevPage() {
    this.currentPage <= 1 ? this.currentPage = 1 : this.currentPage--;
    this.newCurrentPage.emit(this.currentPage);
  }
  setPage(page) {
    this.currentPage = page;
    this.newCurrentPage.emit(page);
  }
  private getCarId() {
    return Math.floor(Math.random() * 1000000)
  }

  onAddCar() {
    this.addCar.id = this.getCarId();
    this.sub = this.carService.addCars(this.addCar).subscribe(() => {
      this.pageChange.emit();
    });
  }
  deleteFromCart(id: number) {
    this.sub2 = this.cartService.deleteFromCart(id).subscribe(() => {
      this.ngOnInit();
    })
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
