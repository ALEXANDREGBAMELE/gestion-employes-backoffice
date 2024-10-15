import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
})
export class CustomTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() itemsPerPage: number = 5;

  @Input() public filteredData: any[] = [];
  @Input() public currentPage: number = 1;
  @Input() public totalPages: number = 1;
  @Input() public filterForm!: FormGroup;
  @Input() public loading: boolean = false; // Indicateur de chargement
  @Input() public noDataMessage: string = 'Aucune donnée disponible'; // Message à afficher lorsque les données sont absentes

  @Input() showIndex: boolean = false; // Afficher l'index
  @Input() showCheckbox: boolean = false; // Afficher la case à cocher
  @Input() actionButtons: { label: string; action: (item: any) => void }[] = []; // Boutons d'action
  @Output() selectionChange = new EventEmitter<any[]>(); // Événement de changement de sélection

  @Input() badgeConfig: { [key: string]: (value: string) => string } = {};
  selectedItems: any[] = []; // Suivre les éléments sélectionnés

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("Datas: ", this.data);

    this.filterForm = this.fb.group({
      searchQuery: [''],
      filterSelect: [''], // Ajout d'un sélecteur pour le filtrage
    });

    this.filteredData = this.data;

    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });

    this.calculateTotalPages();
  }

  applyFilters(): void {
    const searchQuery = this.filterForm.get('searchQuery')?.value.toLowerCase();
    const filterSelect = this.filterForm.get('filterSelect')?.value;

    // Application des filtres
    this.filteredData = this.data.filter(item => {
      const matchesSearch = this.columns.some(column =>
        item[column.key]?.toLowerCase().includes(searchQuery)
      );
      const matchesSelect = filterSelect ? item[filterSelect.key] === filterSelect.value : true; // Filtrage par sélecteur

      return matchesSearch && matchesSelect;
    });

    this.calculateTotalPages();
    this.cdr.detectChanges();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.cdr.detectChanges();
  }

  refreshData(): void {
    this.loading = true; // Démarre le chargement
    // Simule le chargement des données (par exemple, appel d'une API)
    setTimeout(() => {
      this.filteredData = this.data; // Remplacez ceci par votre logique d'actualisation réelle
      this.loading = false; // Arrête le chargement
      this.calculateTotalPages();
    }, 2000);
  }

  toggleSelection(item: any, isChecked: boolean) {
    if (isChecked) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    }
    this.selectionChange.emit(this.selectedItems);
  }

  toggleSelectAll(isChecked: boolean) {
    if (isChecked) {
      // Si toutes les cases à cocher doivent être cochées
      this.selectedItems = [...this.data]; // Ajoute tous les éléments à selectedItems
    } else {
      // Si toutes les cases à cocher doivent être décochées
      this.selectedItems = []; // Vide le tableau des éléments sélectionnés
    }
    // Émet le changement de sélection
    this.selectionChange.emit(this.selectedItems);
  }

  onSelectAllChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.toggleSelectAll(target.checked);
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
}