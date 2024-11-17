// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'custom-multi-select',
//   templateUrl: './custom-multi-select.component.html',
//   styleUrls: ['./custom-multi-select.component.scss'],
// })
// export class CustomMultiSelectComponent implements OnInit {
//   @Input() options: string[] = []; // Liste des options à afficher
//   @Input() label: string = 'Select Options';
//   @Input() placeholder: string = 'Select multiple options';

//   @Output() selectionChange = new EventEmitter<string[]>(); // Émet les options sélectionnées

//   selectedOptions = new FormControl<string[]>([]); // Gestion des options sélectionnées avec FormControl
//   isDropdownOpen = false; // Etat du dropdown (ouvert ou fermé)

//   ngOnInit(): void {
//     // Vérification que la valeur n'est pas null avant d'émettre
//     this.selectedOptions.valueChanges.subscribe(
//       (selectedValues: string[] | null) => {
//         this.selectionChange.emit(selectedValues ?? []);
//       }
//     );
//   }

//   isSelected(option: string): boolean {
//     const currentValue = this.selectedOptions.value ?? [];
//     return currentValue.includes(option);
//   }

//   // Gère l'ouverture/fermeture du dropdown
//   toggleDropdown(): void {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   // Gère la sélection/déselection des options
//   toggleSelection(option: string): void {
//     const currentValue = this.selectedOptions.value ?? [];
//     if (this.isSelected(option)) {
//       this.selectedOptions.setValue(currentValue.filter((value: string) => value !== option));
//     } else {
//       this.selectedOptions.setValue([...currentValue, option]);
//     }
//   }
// }

/**
 * <app-multi-select [options]="['Option 1', 'Option 2', 'Option 3']"
                  label="Choose your options"
                  placeholder="Select your preferences"
                  (selectionChange)="onSelectionChange($event)">
</app-multi-select>
=====================================================================
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onSelectionChange(selectedOptions: string[]): void {
    console.log('Selected Options:', selectedOptions);
  }
}

 */


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-multi-select',
  templateUrl: './custom-multi-select.component.html',
  styleUrls: ['./custom-multi-select.component.scss'],
})
export class CustomMultiSelectComponent {
  @Input() options: string[] = []; // Options passées dynamiquement au composant
  @Input() placeholder: string = 'Sélectionnez une option'; // Placeholder personnalisé
  @Output() selectedChange = new EventEmitter<string[]>(); // Émission des options sélectionnées

  isDropdownOpen = false;
  searchControl: FormControl = new FormControl(''); // FormControl pour la recherche
  selectedOptions = { value: [] as string[] }; // Sélection multiple

  // Ouvre ou ferme le dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Vérifie si une option est sélectionnée
  isSelected(option: string): boolean {
    return this.selectedOptions.value.includes(option);
  }

  // Ajoute ou retire une option sélectionnée
  toggleSelection(option: string) {
    if (this.isSelected(option)) {
      this.selectedOptions.value = this.selectedOptions.value.filter(o => o !== option);
    } else {
      this.selectedOptions.value.push(option);
    }
    // Émettre les options sélectionnées
    this.selectedChange.emit(this.selectedOptions.value);
  }

  // Filtre les options selon la recherche
  filteredOptions(): string[] {
    const searchTerm = this.searchControl.value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(searchTerm));
  }
}
