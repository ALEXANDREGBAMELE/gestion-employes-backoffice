import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableHeadItem } from '../../models/crud/table-head-item';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
})
export class CustomTableComponent implements OnInit {
  @Input() tableHeaderData?: ITableHeadItem[] = [];
  @Input() tableBodyData?: any[] = [];
  @Input() filterParams?: any;
  @Input() paginationParams?: any;
  @Input() tableActionButtons?: any;
  @Input() searchMethod?: ((searchTerm: string) => void) | undefined;
  @Input() customStyles?: any = {};
  @Output() onRowClick = new EventEmitter<any>();
  @Output() showCheckbox?: boolean = true;
  @Input() isLoading: boolean = false;
  @Input() badgeConfig: { [key: string]: (value: string) => string } = {};
  constructor() { }

  ngOnInit(): void {
  }
  // Vérifie si une colonne doit avoir un badge
  isBadgeColumn(columnKey: string): boolean {
    return this.badgeConfig.hasOwnProperty(columnKey);
  }

  // Applique la configuration de badge si disponible
  getBadgeClass(columnKey: string, value: string): string {
    if (this.isBadgeColumn(columnKey)) {
      return this.badgeConfig[columnKey](value);
    }
    return '';
  }

  // Helper method to detect the type of the data
  getFileType(file: string): string {
    if (!file || typeof file !== 'string') {
      return 'text'; // Retournez "text" ou un autre type par défaut si le fichier est undefined ou n'est pas une chaîne
    }

    // Vérifier si c'est une image
    if (file.match(/\.(jpeg|jpg|gif|png)$/)) {
      return 'image';
    }

    // Vérifier si c'est un PDF
    if (file.match(/\.pdf$/)) {
      return 'pdf';
    }

    // Ajouter d'autres conditions si nécessaire pour d'autres types de fichiers

    return 'text'; // Retour par défaut pour tout ce qui n'est pas reconnu
  }
  onSearch(searchTerm: string) {
    if (this.searchMethod) {
      this.searchMethod(searchTerm);
    }
  }

  handleRowClick(rowData: any) {
    this.onRowClick.emit(rowData);
  }

  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'tw-bg-green-500';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }

  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }
  toggleTermsAgreement() {
  }
}
