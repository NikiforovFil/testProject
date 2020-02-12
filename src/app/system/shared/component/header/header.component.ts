import { Component, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../../services/car.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  @Input() currentPage: number;
  @Input() carsPageAmount: number;

  @Output() newCurrentPage = new EventEmitter<number>();
  sortType: String = 'Actual';
  addCar: Car = new Car();
  sub: Subscription;
  constructor(private carService: CarService) { }
  setSortType(data): void {
    this.sortType = data;
  }

  nextPage() {
    this.currentPage++;
    this.newCurrentPage.emit(this.currentPage);
  }
  prevPage() {
    this.currentPage--;
    this.newCurrentPage.emit(this.currentPage);
  }
  setPage(page) {
    this.currentPage = page;
    this.newCurrentPage.emit(page);
  }

  onAddCar() {
    this.sub = this.carService.addCars(this.addCar).subscribe()
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
