import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() paginationOptions: any[] = [{ key: 5, value: 5 }, { key: 10, value: 10 }, { key: 20, value: 20 }, { key: 50, value: 50 }];

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onItemsPerPageChange: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }


  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get Math() {
    return Math;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.onPageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  firstPage() {
    this.changePage(1);
  }

  lastPage() {
    this.changePage(this.totalPages);
  }

  handleSelectChange(event: any) {
    this.itemsPerPage = event;
    this.currentPage = 1;
    this.onItemsPerPageChange.emit(this.itemsPerPage);
  }
}
