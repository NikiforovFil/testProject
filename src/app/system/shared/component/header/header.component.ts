import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() currentPage: number;
  @Input() carsPageAmount: number;

  @Output() newCurrentPage = new EventEmitter<number>();
  sortType: String = 'Actual';

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
}
