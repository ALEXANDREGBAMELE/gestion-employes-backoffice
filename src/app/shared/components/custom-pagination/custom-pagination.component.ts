import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-pagination',
  templateUrl: './custom-pagination.component.html',
})
export class CustomPaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() paginationOptions: any[] = [
    { key: 5, value: 5 },
    { key: 10, value: 10 },
    { key: 20, value: 20 },
    { key: 50, value: 50 },
  ];

  @Output() onPaginationChange = new EventEmitter<{ page: number; size: number }>();
  math = Math;
  ngOnInit(): void { }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage));
  }

  get pageRangeStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get pageRangeEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  updatePagination(type: 'page' | 'size', value: number) {
    if (type === 'page') {
      if (value >= 1 && value <= this.totalPages) {
        this.currentPage = value;
      }
    }

    if (type === 'size') {
      this.itemsPerPage = value;
      this.currentPage = 1;
    }

    this.emitPaginationChange();
  }

  private emitPaginationChange() {
    this.onPaginationChange.emit({
      page: this.currentPage,
      size: this.itemsPerPage,
    });
  }
}
